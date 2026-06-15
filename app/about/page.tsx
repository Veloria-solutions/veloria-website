export const metadata = {
  title: "About Us | Veloria Solutions",
  description:
    "Learn about Veloria Solutions — a team of web designers, developers, and problem-solvers dedicated to helping businesses succeed online.",
};

import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function AboutPage() {
  return (
    <>
      <DottedSurface />
      <CursorGlow />
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
