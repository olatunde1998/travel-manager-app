import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";
import TanstackProvider from "./components/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Travel Manager App",
  description: "Travel Manager App for managing your travel plans",
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3367D6" />
      </head>
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
