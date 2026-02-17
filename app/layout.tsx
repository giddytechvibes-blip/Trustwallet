import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); export const metadata: Metadata = {
  title: "Trust Wallet Help",
  description: "Secure wallet support and guidance",
  openGraph: {
    title: "Trust Wallet Help",
    description: "Secure wallet support and guidance",
    url: "https://trustwallet-gules.vercel.app/",
    siteName: "Trust Wallet Help",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trust Wallet Help - Secure wallet support and guidance",
      },
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
