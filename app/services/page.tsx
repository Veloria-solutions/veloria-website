export const metadata = {
  title: "Our Services | Veloria Solutions",
  description:
    "Website design, chatbots, reservation systems, appointment booking, and full-service retainers — explore everything Veloria Solutions offers.",
};

import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
