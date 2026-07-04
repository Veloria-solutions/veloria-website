import Navbar from "@/components/Navbar";
import RetainerPage from "@/components/services/RetainerPage";
import Footer from "@/components/Footer";

export default function RetainerServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <RetainerPage />
      </main>
      <Footer />
    </>
  );
}
