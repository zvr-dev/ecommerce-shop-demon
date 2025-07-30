import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { NavBar } from "./_components/_layout/navbar";
import { Footer } from "./_components/_layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      <body
        className={`${inter.variable} ${roboto.variable} ${montserrat.variable}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
