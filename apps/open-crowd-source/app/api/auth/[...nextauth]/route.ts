import NextAuth from "next-auth";

import { nextAuthOptions } from "@gym-notes/lib/auth";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
