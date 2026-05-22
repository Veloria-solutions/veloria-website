import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import BundlePage from "@/components/services/BundlePage";
import Footer from "@/components/Footer";

export default function BundleServicePage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <BundlePage />
      </main>
      <Footer />
    </>
  );
}
