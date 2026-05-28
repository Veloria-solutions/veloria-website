import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ChatbotPage from "@/components/services/ChatbotPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ChatbotServicePage() {
  return (
    <>
      <DottedSurface />
      <div className="relative z-[1]">
        <CursorGlow />
        <Navbar />
        <main>
          <ChatbotPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
