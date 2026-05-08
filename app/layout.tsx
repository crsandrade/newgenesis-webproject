import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Genesis",
  description: "Nordic Roman Fantasy MMORPG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}