import Navbar from "@/components/Navbar";
import BookingPage from "@/components/services/BookingPage";
import Footer from "@/components/Footer";

export default function BookingServicePage() {
  return (
    <>
      <Navbar />
      <main>
        <BookingPage />
      </main>
      <Footer />
    </>
  );
}
