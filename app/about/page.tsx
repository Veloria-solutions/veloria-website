export const metadata = {
  title: "About Us | Veloria Solutions",
  description:
    "Learn about Veloria Solutions — a team of web designers, developers, and problem-solvers dedicated to helping businesses succeed online.",
};

import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import AboutSection from "@/components/AboutSection";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <AboutSection />
        <FoundersSection />
      </main>
      <Footer />
    </>
  );
}
