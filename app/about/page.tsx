import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function AboutPage() {
  return (
    <>
      <DottedSurface />
      <CursorGlow />
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
