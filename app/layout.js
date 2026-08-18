import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SiteLoader from "@/components/SiteLoader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.7starproperties.in"),
  title: {
    default: "Property for Rent & Sale in Hauz Khas, South Delhi",
    template: "%s | 7 Star Properties",
  },
  description:
    "Property rent buy Hauz Khas Delhi — verified flats, builder floors and offices for rent and sale in Hauz Khas, Kalu Sarai, Green Park and Safdarjung Enclave. Rent, buy, sell and manage with 7 Star Properties. Call +91 99992 39650.",
  applicationName: "7 Star Properties",
  authors: [{ name: "7 Star Properties" }],
  keywords: [
    "property rent buy Hauz Khas Delhi",
    "property for rent in Hauz Khas",
    "flats for sale in South Delhi",
    "builder floor Hauz Khas",
    "property dealer Kalu Sarai",
    "real estate Green Park Delhi",
    "property management South Delhi",
    "Safdarjung Enclave rent",
    "Vijay Mandal Enclave property",
  ],
  creator: "7 Star Properties",
  publisher: "7 Star Properties",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "real estate",
  alternates: { canonical: "https://www.7starproperties.in" },
  openGraph: {
    title: "7 Star Properties — Rent | Buy | Sell | Manage in South Delhi",
    description:
      "Verified property for rent and sale in Hauz Khas, Green Park, Safdarjung Enclave and across South Delhi. Local expertise, honest pricing, no hidden charges.",
    url: "https://www.7starproperties.in",
    siteName: "7 Star Properties",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.7starproperties.in/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "7 Star Properties — property for rent and sale in Hauz Khas, South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Star Properties — Rent | Buy | Sell | Manage in South Delhi",
    description: "Verified property for rent and sale in Hauz Khas and across South Delhi.",
    images: ["https://www.7starproperties.in/brand/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3F",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteLoader />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
