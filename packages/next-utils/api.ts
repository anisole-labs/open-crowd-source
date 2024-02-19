import * as Sentry from "@sentry/nextjs";
import { NextResponse } from "next/server";
import zod from "zod";

import { APIError } from "./error";
import { NextRequest, sessionSchema } from "./types";
import { Session } from "./types/next-auth";

// Next, let's define a wrapper that would take in the
// app router's handler function and return a handler
// internally, this wrapper would catch any errors thrown
// by the handler and return the appropriate response

// withErrorHandling i/os:
// 1. (input) handler function
// 2. (output) handler function with error handling

// eslint-disable-next-line no-undef
export function withErrorHandling(
  handler: (request: NextRequest) => Promise<NextResponse>,
) {
  // eslint-disable-next-line no-undef
  return async (request: NextRequest) => {
    try {
      return await handler(request);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof APIError) {
        return NextResponse.json(error.json, { status: error.status });
      } else {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }
  };
}

// Similarly, we could also define a authenticated wrapper

// withAuthentication will internally call withErrorHandling
// thus will have the same i/os as withErrorHandling

// since we are getting session, we might as well set sentry user

// eslint-disable-next-line no-undef
export function withAuthentication(
  handler: (request: NextRequest) => Promise<NextResponse>,
  getServerAuthSession: () => Promise<Session | null>,
) {
  // eslint-disable-next-line no-undef
  return withErrorHandling(async (request: NextRequest) => {
    const session = await getServerAuthSession();
    if (!session) {
      throw new APIError({ title: "Unauthorized" }, 401);
    }

    // validate session
    const validatedSession = sessionSchema.safeParse(session);
    if (!validatedSession.success) {
      throw new APIError(
        { title: "Validation Error", error: validatedSession.error },
        500,
      );
    }

    // set session
    request.session = validatedSession.data;

    // set sentry user
    Sentry.setUser({
      id: session.user.id,
      email: session.user.email || "",
    });

    return await handler(request);
  });
}

// One handler that would help us validate the request body
// for validation, we will use zod

// internally this uses withErrorHandling (yaay DRY)

// withValidation i/os:
// 1. (input) handler function
// 2. (input) zod schema
// 3. (output) handler function with validation

// eslint-disable-next-line no-undef
export function withValidation(
  handler: (request: NextRequest) => Promise<NextResponse>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: zod.Schema<any>,
) {
  // eslint-disable-next-line no-undef
  return withErrorHandling(async (request: NextRequest) => {
    // validate body
    const body = await request.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      throw new APIError(
        { title: "Validation Error", error: result.error.errors },
        400,
      );
    }

    // set validated body
    request.validatedBody = result.data;

    return await handler(request);
  });
}

export function withParams(
  handler: (request: NextRequest) => Promise<NextResponse>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (request: NextRequest, { params }: { params: any }) => {
    if (!params) {
      throw new APIError({ title: "Missing URL parameter" }, 400);
    }
    request.params = params;
    return await handler(request);
  };
}
