import { z } from "zod";

export const sessionSchema = z.object({
  user: z.object({
    name: z.string(),
    email: z.string().email().nullable(),
    image: z.string().url(),
    id: z.string(),
  }),
});
export type TsessionSchema = z.infer<typeof sessionSchema>;
