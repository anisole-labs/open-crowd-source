import { NextRequest as OriginalNextRequest } from "next/server";

import { TsessionSchema } from "./session";

// let's define additional attributes for NextRequest
// 1. validatedBody: validated JSON object or null
// - this will be used to store the validated body, if any
// 2. session: Session object or null
// - this will be used to store the session, if any
export interface NextRequest extends OriginalNextRequest {
  validatedBody?: object;
  session?: TsessionSchema;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
}
