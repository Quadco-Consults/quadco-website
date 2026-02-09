import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { organizationJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Quadco Consults | Engineering & IT Solutions",
    template: "%s | Quadco Consults",
  },
  description: siteConfig.description,
  keywords: [
    "IT consulting Nigeria",
    "engineering solutions Abuja",
    "digital transformation Nigeria",
    "oil and gas solutions",
    "cybersecurity Nigeria",
    "ISO certified IT company Nigeria",
    "Quadco Consults",
    "infrastructure operations",
    "enterprise resource planning",
  ],
  authors: [{ name: "Quadco Consults Limited" }],
  creator: "Quadco Consults Limited",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Quadco Consults - Engineering & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@quadcoconsults",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
