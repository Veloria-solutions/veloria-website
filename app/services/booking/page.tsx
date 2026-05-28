import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import BookingPage from "@/components/services/BookingPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function BookingServicePage() {
  return (
    <DottedSurface className="min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <BookingPage />
      </main>
      <Footer />
    </DottedSurface>
  );
}
