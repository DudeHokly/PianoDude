import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Catigories, Footer, Header } from "@/components/Shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piano Dude",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Catigories />
        {children}
        <Footer />
      </body>
    </html>
  );
}
