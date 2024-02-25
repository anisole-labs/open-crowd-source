import { getOrderCreationHandler } from "@repo/api";
import { withAuthentication } from "@repo/next-utils";

import { getServerAuthSession } from "@open-crowd-source/lib/auth";

export const POST = withAuthentication(
  getOrderCreationHandler(true),
  getServerAuthSession,
);
