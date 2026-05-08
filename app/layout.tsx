import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "New Genesis",
    template: "%s | New Genesis",
  },

  description:
    "O seu futuro escrito por você.",

  keywords: [
    "MMORPG",
    "WYD Genesis",
    "Nordic",
    "WYD",
    "Online Game",
    "New Genesis",
  ],
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