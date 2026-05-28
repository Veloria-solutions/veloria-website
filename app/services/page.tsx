import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ServicesPage() {
  return (
    <>
      <DottedSurface />
      <div className="relative z-[1]">
        <CursorGlow />
        <Navbar />
        <main>
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
