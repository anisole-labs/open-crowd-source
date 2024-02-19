import zod from "zod";

import { APIError } from "./error";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateSchema(schema: zod.Schema<any>, body: object) {
  const result = schema.safeParse(body);
  if (!result.success) {
    throw new APIError(
      { title: "Validation Error", error: result.error.errors },
      500,
    );
  }

  return result.data;
}
