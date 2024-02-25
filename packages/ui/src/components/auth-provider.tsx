"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  // eslint-disable-next-line no-undef
  children?: React.ReactNode;
  session?: Session;
};

export const AuthProvider = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
