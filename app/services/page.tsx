export const metadata = {
  title: "Our Services | Veloria Solutions",
  description:
    "Website design, chatbots, reservation systems, appointment booking, and full-service retainers — explore everything Veloria Solutions offers.",
};

import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ServicesPage() {
  return (
    <>
      <DottedSurface />
      <CursorGlow />
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
