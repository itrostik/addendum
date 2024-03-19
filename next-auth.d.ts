import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  provider: string;
  passwordHash?: string;
  avatar: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
  interface Profile {
    sub?: string;
    name?: string;
    email?: string;
    image?: string;
    avatar_url?: string;
    picture?: string;
  }
}
