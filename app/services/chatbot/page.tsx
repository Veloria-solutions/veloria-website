import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ChatbotPage from "@/components/services/ChatbotPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ChatbotServicePage() {
  return (
    <DottedSurface className="min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <ChatbotPage />
      </main>
      <Footer />
    </DottedSurface>
  );
}
