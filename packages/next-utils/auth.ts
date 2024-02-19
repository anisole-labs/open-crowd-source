import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

import databaseClient from "@repo/database";

import { SessionUser } from "./types";

const prismaAdapter = PrismaAdapter(databaseClient);

declare module "next-auth" {
  interface Session {
    user: SessionUser;
  }
}

export type GetNextAuthOptionsProps = {
  createUserAdditionalSteps: (user: AdapterUser) => Promise<void>;
  providers: NextAuthOptions["providers"];
};

export function getNextAuthOptions(props: GetNextAuthOptionsProps) {
  const options: NextAuthOptions = {
    adapter: {
      ...prismaAdapter,
      createUser: async (user) => {
        const createdUser = await prismaAdapter.createUser!({
          ...user,
        });

        await props.createUserAdditionalSteps(createdUser);

        return createdUser;
      },
    },
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: "/",
    },
    providers: [...props.providers],
    callbacks: {
      async session({ token, session }) {
        if (token) {
          session.user.id = token.id as string;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.image = token.picture;
        }

        return session;
      },
      async jwt({ token, user }) {
        // on new session, user is passed
        // thus check if user is present
        // if yes, return from here
        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            picture: user.image,
          };
        }

        // if user is not present
        // only token is passed, user is null
        // thus we need to check if token has id or not
        // if yes, return from here
        if (token.id) {
          return token;
        }

        // if no id in token, fetch user from db
        // append id to token and return
        const dbUser = await databaseClient.user.findFirst({
          where: {
            email: token.email || "",
          },
        });

        // there could be a case where user is not present in db
        // in that case, return token as it is
        if (!dbUser) {
          return token;
        }

        return {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          picture: dbUser.image,
        };
      },
    },
  };

  return options;
}
