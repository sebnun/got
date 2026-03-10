import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import background from "../public/background.jpg";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Game of Thrones family",
  description: "Game of Thrones Family Inspector",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative p-4 md:p-6`}>
        <Image
          alt="Background"
          src={background}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -10,
            opacity: 0.1,
          }}
        />
        <nav>
          <h1 className="text-center font-extrabold text-2xl md:text-3xl underline underline-offset-6">
            <Link href="/">Game of Thrones families</Link>
          </h1>
        </nav>
        <main className="pt-6 min-h-dvh">{children}</main>
      </body>
    </html>
  );
}
