import { getOrderCreationHandler } from "@repo/api";
import { withAuthentication } from "@repo/next-utils";

import { getServerAuthSession } from "@gym-notes/lib/auth";

export const POST = withAuthentication(
  getOrderCreationHandler("gym-notes-early-bird", true),
  getServerAuthSession,
);
