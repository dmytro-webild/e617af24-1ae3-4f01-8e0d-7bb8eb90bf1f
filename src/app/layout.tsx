import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'MaMa YaTai & Donuts | Authentic Mochi Donuts & Japanese Snacks in Davie',
  description: 'Visit MaMa YaTai & Donuts in Davie, FL for the best Mochi Donuts, Yakitori, and Korean-style Corn Dogs. Authentic Japanese cafe vibes in Carriage Hills Plaza.',
  openGraph: {
    "title": "MaMa YaTai & Donuts",
    "description": "Authentic Japanese-inspired cafe in Davie, FL.",
    "siteName": "MaMa YaTai & Donuts"
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
