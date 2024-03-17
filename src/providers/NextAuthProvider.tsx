"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
