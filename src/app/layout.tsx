"use client";

import { Providers } from "@/components/providers";
import Fonts from "@/theme/fonts";

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
