import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALU LINE Systems | Aluminijske Ograde, Roletne i Nadstrešnice, Srebrenik",
  description:
    "Ugrađujemo aluminijske ograde, roletne i nadstrešnice po vašoj mjeri. Sve izrađujemo i montiramo sami. Srebrenik, BiH.",
  keywords: [
    "aluminijske ograde",
    "roletne",
    "nadstrešnice",
    "Srebrenik",
    "Bosnia",
    "ALU LINE Systems",
    "balkonske ograde",
    "dvorišne ograde",
  ],
  authors: [{ name: "ALU LINE Systems" }],
  verification: {
    google: "70X2NB13DqvB717jOZB742Tqd-F1ayb4-hFkVeosmOs",
  },
  openGraph: {
    title: "ALU LINE Systems | Aluminijske Ograde, Roletne i Nadstrešnice",
    description:
      "Ugrađujemo aluminijske ograde, roletne i nadstrešnice po vašoj mjeri. Sve izrađujemo i montiramo sami.",
    type: "website",
    locale: "bs_BA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={outfit.variable}>
      <body className="font-outfit antialiased bg-white text-alu-dark overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
