import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function AboutPage() {
  return (
    <>
      <DottedSurface />
      <div className="relative z-[1]">
        <CursorGlow />
        <Navbar />
        <main>
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
