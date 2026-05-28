import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ContactPage() {
  return (
    <>
      <div className="relative z-[1]">
        <DottedSurface />
        <CursorGlow />
        <Navbar />
        <main>
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
