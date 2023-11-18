"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Travel Manager App",
//   description: "Travel Manager App for managing your travel plans",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </html>
  );
}
