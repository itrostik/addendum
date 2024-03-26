import NextAuth, { Profile, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { DEFAULT_USER_AVATAR } from "@/constants/defaultUserAvatar";

import type { NextAuthOptions } from "next-auth";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/firestore";

import { v4 } from "uuid";
import { isUserExists } from "@/utils/isUserExists";
import { UserType } from "@/types/userType";

type SignInType = {
  profile?: Profile & {
    avatar_url?: string;
    picture?: string;
  };
};

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
    error: "/auth/error",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      if (session.user && !session.user.image)
        session.user.image = DEFAULT_USER_AVATAR;
      return session;
    },
    // @ts-ignore
    async signIn({ profile }: SignInType) {
      if (profile && profile.email) {
        if (!(await isUserExists(profile.email))) {
          const uuid = v4();
          let avatar =
            profile.avatar_url || profile.picture || DEFAULT_USER_AVATAR;

          if (avatar === profile.picture) {
            avatar = profile.picture.split("=")[0];
          }
          const userData: UserType = {
            id: uuid,
            name: profile.name || profile.email,
            email: profile.email,
            avatar,
            description: "",
            like_genres: [],
            review: 0,
          };
          await setDoc(doc(db, "users", profile.email), userData);
        }
      }
      return true;
    },
  },
}) satisfies NextAuthOptions;

export { handler as GET, handler as POST };
