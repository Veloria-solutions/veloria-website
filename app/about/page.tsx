import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <TrustSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
