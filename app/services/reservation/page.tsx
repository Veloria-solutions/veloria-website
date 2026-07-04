import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import ReservationPage from "@/components/services/ReservationPage";
import Footer from "@/components/Footer";

export default function ReservationServicePage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <ReservationPage />
      </main>
      <Footer />
    </>
  );
}
