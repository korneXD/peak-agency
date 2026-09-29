import type { Metadata } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono-num",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PEAK Agency: influencer marketing, ami teljesít",
  description:
    "A PEAK Agency összeköti a márkádat a megfelelő tartalomgyártókkal. Stratégia, kasztolás, gyártás és teljesítménymérés egy helyen. Budapest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="flex min-h-dvh flex-col text-foreground antialiased">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
