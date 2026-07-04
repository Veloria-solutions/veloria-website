import Navbar from "@/components/Navbar";
import AutomationPage from "@/components/services/AutomationPage";
import Footer from "@/components/Footer";

export default function AutomationServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <AutomationPage />
      </main>
      <Footer />
    </>
  );
}
