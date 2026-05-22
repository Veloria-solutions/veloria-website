import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="h-screen overflow-hidden">
        <Hero />
      </main>
    </>
  );
}
