"use client";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import ConvexClientProvider from "@/provider/ConvexClientProvider";

import "../styles/global.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "PS Addendum",
//   description: "Продажа/обмен игр PS5",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
