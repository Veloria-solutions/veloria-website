import Navbar from "@/components/Navbar";
import ChatbotPage from "@/components/services/ChatbotPage";
import Footer from "@/components/Footer";

export default function ChatbotServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <ChatbotPage />
      </main>
      <Footer />
    </>
  );
}
