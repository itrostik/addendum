import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getPasswordHash } from "@/utils/getPasswordHash";
import { DEFAULT_USER_AVATAR } from "@/constants/defaultUserAvatar";

import type { NextAuthOptions } from "next-auth";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/firestore";

import { v4 } from "uuid";
import { isUserExists } from "@/utils/isUserExists";
import { checkPasswordHash } from "@/utils/checkPasswordHash";

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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "*****" },
        avatar: { label: "Avatar", type: "image", placeholder: "" },
      },
      async authorize(credentials) {
        if (credentials && credentials.email && credentials.password) {
          const user = await isUserExists(credentials.email, "credentials");
          const uuid = v4();
          const userData = {
            id: uuid,
            name: credentials.email,
            email: credentials.email,
            password_hash: await getPasswordHash(credentials!.password),
            avatar: user?.avatar || DEFAULT_USER_AVATAR,
            provider: "credentials",
          };

          if (user && user.password_hash) {
            if (
              await checkPasswordHash(user.password_hash, credentials.password)
            ) {
              return userData;
            } else throw new Error("Invalid credentials");
          } else {
            await setDoc(doc(db, "users", uuid), userData);
            return userData;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (!session.user.image) session.user.image = DEFAULT_USER_AVATAR;
      return session;
    },

    async signIn({ account, profile }) {
      if (account?.type === "oauth" && profile && profile.email) {
        console.log(profile);
        const user = await isUserExists(profile.email, "OAuth");

        const avatar = profile.avatar_url || profile.picture;

        if (!user) {
          const uuid = v4();
          const userData = {
            id: uuid,
            name: profile.name,
            email: profile.email,
            avatar,
            provider: "OAuth",
          };
          await setDoc(doc(db, "users", uuid), userData);
        }
      }
      return true;
    },
  },
}) satisfies NextAuthOptions;

export { handler as GET, handler as POST };
