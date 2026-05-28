import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import RetainerPage from "@/components/services/RetainerPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function RetainerServicePage() {
  return (
    <>
      <div className="relative z-[1]">
        <DottedSurface />
        <CursorGlow />
        <Navbar />
        <main>
          <RetainerPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
