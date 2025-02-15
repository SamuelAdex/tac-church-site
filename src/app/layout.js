import "./globals.css";
import ToastProvider from "@/components/global/Toast";
import ogImage from './opengraph-image.png';
import { FacebookPixelEvents } from "@/app/lib/pixels-event";
import { Suspense } from "react";
import Script from "next/script";

const GTM_ID = process.env.GTM_ID;

export const metadata = {
  title: "TAC",
  description: "The Church with the difference, raising Champions for Global Impact.",
  metadataBase: new URL("https://thearenaofchampions.com"),
  keywords: ["worship", "praise", "lyric", "lyric concert", "young minister"],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: 'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739623614/ch_logo_cg7qlr.png',
    shortcut: 'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739623614/ch_logo_cg7qlr.png',
    apple: 'https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739623614/ch_logo_cg7qlr.png',
  },
  applicationName: "TAC",
  authors: [
    {
      name: "The Church with the difference, raising Champions for Global Impact.",
      url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1739623614/ch_logo_cg7qlr.png",
    },
  ],
  referrer: "origin",
  creator: "@tac",
  publisher: "TAC",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://thearenaofchampions.com" },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://thearenaofchampions.com",
    title: "The Arena Of Champions",
    description: "The Church with the difference, raising Champions for Global Impact.",
    siteName: "TAC",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
      {
        url: ogImage.src,
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ourblockroll",
    creator: "@sadiq",
    images: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1728551804/opengraph-image_ms9cro.png",
    description: "Be the first to join the Blockroll V2 waitlist.",
    title: "Blockroll",
  },
  verification: {
    google: "3JNdBVvDvV8TFk5ch5DmkjQtnCq47s23wziCXCIHwHs",
  },
  abstract:
    "The Church with the difference, raising Champions for Global Impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased  bg-[#f2f2f2] relative`}
      >
        <ToastProvider />
        {children}
        {/* <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense> */}
      </body>
    </html>
  );
}
