import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import BookingPage from "@/components/services/BookingPage";
import Footer from "@/components/Footer";

export default function BookingServicePage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <BookingPage />
      </main>
      <Footer />
    </>
  );
}
