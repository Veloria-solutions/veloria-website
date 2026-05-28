import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ReservationPage from "@/components/services/ReservationPage";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ReservationServicePage() {
  return (
    <>
      <DottedSurface />
      <div className="relative z-[1]">
        <CursorGlow />
        <Navbar />
        <main>
          <ReservationPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
