import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import type { Locale } from "@/lib/i18n/config";
import { alternatesFor } from "@/lib/i18n/paths";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  return { alternates: alternatesFor(params.locale, "/") };
}

export default function Home({ params }: { params: { locale: Locale } }) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ProductsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer locale={params.locale} />
      <WhatsAppFAB />
    </main>
  );
}
