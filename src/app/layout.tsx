import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./_components/layout/navbar";
import { Footer } from "./_components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SHOP DEMON",
  description: "SHOP DEMON DOT COM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
