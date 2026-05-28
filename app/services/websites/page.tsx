import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import WebsitesPage from "@/components/services/WebsitesPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function WebsitesServicePage() {
  return (
    <DottedSurface className="min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <WebsitesPage />
      </main>
      <Footer />
    </DottedSurface>
  );
}
