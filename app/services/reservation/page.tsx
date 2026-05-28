import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ReservationPage from "@/components/services/ReservationPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ReservationServicePage() {
  return (
    <>
      <DottedSurface />
      <CursorGlow />
      <Navbar />
      <main>
        <ReservationPage />
      </main>
      <Footer />
    </>
  );
}
