import Navbar from "@/components/Navbar";
import WebsitesPage from "@/components/services/WebsitesPage";
import Footer from "@/components/Footer";

export default function WebsitesServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <WebsitesPage />
      </main>
      <Footer />
    </>
  );
}
