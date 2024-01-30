"use client";

import Script from "next/script";

import { Providers } from "@/components/providers";
import Fonts from "@/theme/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        id="termly"
        strategy="afterInteractive"
        src="https://app.termly.io/embed.min.js"
        data-auto-block="on"
        data-website-uuid="56e7646d-9e77-49c7-8838-0eb3b4bfe2f8"
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-26CF3WVPNS"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-26CF3WVPNS');
        `}
      </Script>
      <Script
        id="paypal-donate"
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        strategy="afterInteractive"
      />
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Fonts />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
