import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Condiment, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const condiment = Condiment({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-condiment",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orbis.Nft — Beyond Earth",
    template: "%s | Orbis.Nft",
  },
  description:
    "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://orbis.nft",
    siteName: "Orbis.Nft",
    title: "Orbis.Nft — Beyond Earth",
    description:
      "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Orbis.Nft — 3D Space Artifacts Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbis.Nft — Beyond Earth",
    description:
      "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.",
    images: ["/og-image.jpg"],
    creator: "@orbisnft",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${condiment.variable} ${spaceMono.variable} dark`}
    >
      <body className="min-h-screen bg-[#020202] text-[#EFF4FF] antialiased">
        {children}
      </body>
    </html>
  );
}
