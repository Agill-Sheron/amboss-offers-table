import type { Metadata } from "next";
import { Inter as InterVariable } from "next/font/google";
import "./globals.css";

const inter = InterVariable({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Amboss Offers Table",
  description: "Lightning Network Channel Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
