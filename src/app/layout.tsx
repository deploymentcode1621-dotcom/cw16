import type { Metadata } from "next";
import { Poppins, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-dev",
  display: "swap",
});

const siteUrl = "https://ssdpclatur.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "S.S. De-Addiction & Palliative Care Centre, Latur | Bargale Hospital",
    template: "%s | S.S. De-Addiction & Palliative Care Centre, Latur",
  },
  description:
    "S.S. De-Addiction & Palliative Care Centre, Latur — professional de-addiction treatment and compassionate palliative care in Vishal Nagar, Latur. Run by Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha.",
  keywords: [
    "de addiction centre latur",
    "rehabilitation centre latur",
    "palliative care latur",
    "alcohol addiction treatment latur",
    "drug addiction treatment latur",
    "counselling centre latur",
    "व्यसनमुक्ती केंद्र लातूर",
    "उपशामक काळजी लातूर",
  ],
  authors: [{ name: "Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha" }],
  openGraph: {
    title: "S.S. De-Addiction & Palliative Care Centre, Latur",
    description:
      "Professional de-addiction treatment and compassionate palliative care in the heart of Latur.",
    url: siteUrl,
    siteName: "S.S. De-Addiction & Palliative Care Centre, Latur",
    images: [{ url: "/images/hero-banner.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    alternateLocale: "mr_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S.S. De-Addiction & Palliative Care Centre, Latur",
    description:
      "Professional de-addiction treatment and compassionate palliative care in the heart of Latur.",
    images: ["/images/hero-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={`${poppins.variable} ${inter.variable} ${notoDevanagari.variable}`}>
      <body className="font-body antialiased bg-bg text-ink">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
