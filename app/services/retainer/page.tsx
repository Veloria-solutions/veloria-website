import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import RetainerPage from "@/components/services/RetainerPage";
import Footer from "@/components/Footer";

export default function RetainerServicePage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <RetainerPage />
      </main>
      <Footer />
    </>
  );
}
