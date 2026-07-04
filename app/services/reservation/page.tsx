import Navbar from "@/components/Navbar";
import ReservationPage from "@/components/services/ReservationPage";
import Footer from "@/components/Footer";

export default function ReservationServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <ReservationPage />
      </main>
      <Footer />
    </>
  );
}
