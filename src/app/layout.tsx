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
      <body className="min-h-screen bg-[#010828] text-[#EFF4FF] antialiased">
        {children}
        {/* Texture overlay: fixed full-screen noise/grain, above everything */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 opacity-60 mix-blend-lighten"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      </body>
    </html>
  );
}
