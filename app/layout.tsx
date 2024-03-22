import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/ui/common/header";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/option";
import { NextAuthProvider } from "@/ui/common/nextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  console.log(session)
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </head>
      <body className={inter.className}><NextAuthProvider session={session}>
        <Header session={session}></Header>
        {children}

      </NextAuthProvider></body>
    </html>
  );
}
