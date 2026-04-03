import type { Metadata } from "next";
import Script from "next/script";
import ScriptLoader from "@/components/ScriptLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: "AvatarHeatAir",
  description: "Trusted Heating & Air Conditioning Experts",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/fontAwesomePro.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/barfiller.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/backToTop.css" />
        <link rel="stylesheet" href="/assets/css/metismenu.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {children}

        {/* jQuery must load first, synchronously */}
        <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* All other plugins loaded in sequence via ScriptLoader */}
        <ScriptLoader />
      </body>
    </html>
  );
}
