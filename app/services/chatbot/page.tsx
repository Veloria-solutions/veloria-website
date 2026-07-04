import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import ChatbotPage from "@/components/services/ChatbotPage";
import Footer from "@/components/Footer";

export default function ChatbotServicePage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <ChatbotPage />
      </main>
      <Footer />
    </>
  );
}
