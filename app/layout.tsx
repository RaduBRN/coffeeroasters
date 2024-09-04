import type { Metadata } from "next";
import { Fraunces, Barlow } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  // display: "swap",
  variable: "--font-fraunces",
});

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  // display: "swap",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Coffee Roasters",
  description: "Coffee subscription site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${barlow.variable} ${fraunces.variable} bg-lightcream`}
      lang="en"
    >
      <body className="font-barlow px-6 md:px-10 max-w-[1280px] mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
