export const metadata = {
  title: "Our Services | Veloria Solutions",
  description:
    "Website design, chatbots, reservation systems, appointment booking, and full-service retainers — explore everything Veloria Solutions offers.",
};

import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
