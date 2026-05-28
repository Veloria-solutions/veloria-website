import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ContactPage() {
  return (
    <DottedSurface className="min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <CTASection />
      </main>
      <Footer />
    </DottedSurface>
  );
}
