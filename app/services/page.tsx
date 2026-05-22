import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
