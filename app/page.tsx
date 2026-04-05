import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProductsSection from "@/components/ProductsSection";
<<<<<<< HEAD
import DoorGallerySection from "@/components/DoorGallerySection";
import ReviewsSection from "@/components/ReviewsSection";
=======
import GallerySection from "@/components/GallerySection";
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ProductsSection />
<<<<<<< HEAD
      <DoorGallerySection />
      <ReviewsSection />
=======
      <GallerySection />
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
