import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

import "../styles/global.scss";
import NextAuthProvider from "@/providers/NextAuthProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PS Addendum",
  description: "Продажа/обмен игр PS5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
