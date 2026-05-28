import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import RetainerPage from "@/components/services/RetainerPage";
import Footer from "@/components/Footer";

export default function RetainerServicePage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <RetainerPage />
      </main>
      <Footer />
    </>
  );
}
