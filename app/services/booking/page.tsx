import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import BookingPage from "@/components/services/BookingPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function BookingServicePage() {
  return (
    <>
      <div className="relative z-[1]">
        <DottedSurface />
        <CursorGlow />
        <Navbar />
        <main>
          <BookingPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
