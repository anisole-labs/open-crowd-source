import { User } from "next-auth";
import { JWT as OriginalJWT } from "next-auth/jwt";

type UserId = string;

interface NewJWT {
  id: UserId;
}

type CombinedJWT = OriginalJWT & NewJWT;

interface NewSession {
  user: User & {
    id: UserId;
  };
}

export type SessionUser = NewSession["user"];
export type JWT = CombinedJWT;
export type Session = NewSession;
