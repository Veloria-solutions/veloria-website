import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book a Consultation | Veloria Solutions",
  description:
    "Get in touch with Veloria Solutions. Tell us about your business and we'll get back to you with a free, no-obligation consultation.",
};

export default function ContactPage() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <section className="py-36 relative overflow-hidden">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 65% at 50% 30%, rgba(141,187,255,0.07) 0%, transparent 68%)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left — intro */}
              <div className="flex flex-col gap-7">
                <h1 className="text-4xl md:text-[52px] font-black leading-[1.05] tracking-tight font-satoshi">
                  Let&apos;s Build Something
                  <br />
                  <span className="gradient-text">Great Together</span>
                </h1>

                <p className="text-[#A1A1A1] text-[15px] leading-relaxed max-w-sm">
                  Tell us about your business and what you need. We&apos;ll reply within one business day with a free, no-obligation consultation.
                </p>

                <div className="flex flex-col gap-4 pt-2">
                  {[
                    ["Free Consultation", "No cost, no commitment — just a conversation."],
                    ["Fast Response", "We reply within one business day."],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8DBBFF] shrink-0" />
                      <div>
                        <div className="text-white text-[13px] font-semibold">{title}</div>
                        <div className="text-[#A1A1A1] text-[12px] leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/[0.06]">
                  <p className="text-[#555] text-[12px] mb-1">Or email us directly</p>
                  <a
                    href="mailto:info@veloria.solutions"
                    className="text-[#A1A1A1] hover:text-white text-[13.5px] transition-colors"
                  >
                    info@veloria.solutions
                  </a>
                  <p className="text-[#555] text-[12px] mt-4 mb-1">Or give us a call</p>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="tel:+491726510699"
                      className="text-[#A1A1A1] hover:text-white text-[13.5px] transition-colors"
                    >
                      Titus (Co-owner) — +49 172 6510699
                    </a>
                    <a
                      href="tel:+43676711991"
                      className="text-[#A1A1A1] hover:text-white text-[13.5px] transition-colors"
                    >
                      Antares (Co-owner) — +43 676 711991
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
                <h2 className="text-white font-bold text-[18px] mb-6 font-satoshi">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
