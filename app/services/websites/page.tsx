import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import WebsitesPage from "@/components/services/WebsitesPage";
import Footer from "@/components/Footer";

export default function WebsitesServicePage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <WebsitesPage />
      </main>
      <Footer />
    </>
  );
}
