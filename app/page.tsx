import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Veloria Solutions | Web Design, Chatbots & Automation",
  description:
    "Veloria Solutions delivers professional website design, intelligent chatbots, reservation systems, and automated appointment booking for growing businesses.",
};

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <SolutionsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
