import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import AutomationPage from "@/components/services/AutomationPage";
import Footer from "@/components/Footer";

export default function AutomationServicePage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <AutomationPage />
      </main>
      <Footer />
    </>
  );
}
