import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import WebsitesPage from "@/components/services/WebsitesPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function WebsitesServicePage() {
  return (
    <>
      <DottedSurface />
      <div className="relative z-[1]">
        <CursorGlow />
        <Navbar />
        <main>
          <WebsitesPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
