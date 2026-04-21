// MAINTENANCE MODE — ukloni komentar ispod da vratiš sajt
const MAINTENANCE_MODE = true;

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductsSection";
import DoorGallerySection from "@/components/DoorGallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import MaintenancePage from "@/components/MaintenancePage";

export default function Home() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ProductsSection />
      <DoorGallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
