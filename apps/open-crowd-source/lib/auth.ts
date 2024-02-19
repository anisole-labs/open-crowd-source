import { getServerSession } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

import { getNextAuthOptions, GetNextAuthOptionsProps } from "@repo/next-utils";

const optionProps: GetNextAuthOptionsProps = {
  createUserAdditionalSteps: async (user: AdapterUser) => {
    console.debug("User created", user);
  },
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export const nextAuthOptions = getNextAuthOptions(optionProps);
export const getServerAuthSession = () => getServerSession(nextAuthOptions);
