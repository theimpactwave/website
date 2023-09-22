"use client";

import "./globals.css";
import Fonts from "@/theme/fonts";
import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Fonts />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
