"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Mail, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const starterFeatures = [
  "Up to 5 pages (e.g. Home, About, Services, Gallery, Contact)",
  "Works beautifully on phones, tablets, and computers",
  "Clean, modern design tailored to your business",
  "Contact form so customers can reach you easily",
  "Basic Google search setup so people can find you",
  "Ready in approximately 2 weeks",
];

const businessFeatures = [
  "Up to 10 pages",
  "Works beautifully on phones, tablets, and computers",
  "Clean, modern design tailored to your business",
  "Contact form plus an online booking or enquiry system",
  "Google Maps so customers can find your location",
  "A section to display customer reviews",
  "Google Analytics so you can see how many people visit",
  "Social media links",
  "30 days of support after your site goes live",
  "Ready in approximately 3–4 weeks",
];

// Replace these with real projects as they are completed
const projects = [
  {
    name: "Murphy's Bakery",
    category: "Local Bakery",
    package: "Starter",
    bg: "from-amber-950 to-orange-950",
    accent: "#F59E0B",
    lines: ["#F59E0B33", "#D9770633"],
  },
  {
    name: "Kelly Physio Clinic",
    category: "Healthcare",
    package: "Business",
    bg: "from-sky-950 to-blue-950",
    accent: "#38BDF8",
    lines: ["#38BDF833", "#0EA5E933"],
  },
  {
    name: "The Copper Pot",
    category: "Restaurant",
    package: "Business",
    bg: "from-emerald-950 to-green-950",
    accent: "#34D399",
    lines: ["#34D39933", "#10B98133"],
  },
  {
    name: "O'Brien Roofing",
    category: "Trades & Construction",
    package: "Starter",
    bg: "from-slate-900 to-zinc-900",
    accent: "#94A3B8",
    lines: ["#94A3B833", "#64748B33"],
  },
  {
    name: "Bloom Garden Centre",
    category: "Garden & Retail",
    package: "Business",
    bg: "from-lime-950 to-green-950",
    accent: "#84CC16",
    lines: ["#84CC1633", "#65A30D33"],
  },
  {
    name: "Walsh & Co Solicitors",
    category: "Legal Services",
    package: "Business",
    bg: "from-violet-950 to-purple-950",
    accent: "#A78BFA",
    lines: ["#A78BFA33", "#8B5CF633"],
  },
];

function PackageCard({
  name,
  price,
  tagline,
  features,
  highlighted,
  delay,
}: {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
        highlighted
          ? "bg-[#8DBBFF]/[0.05] border-[#8DBBFF]/30"
          : "bg-[#1E1E1E] border-[#232323]"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full bg-[#8DBBFF] text-black text-[11px] font-bold tracking-widest uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-white font-black text-2xl mb-1 font-satoshi">{name}</h3>
        <p className="text-[#A1A1A1] text-sm">{tagline}</p>
      </div>

      <div className="mb-8">
        <span className="text-white font-black text-5xl font-satoshi">{price}</span>
        <span className="text-[#A1A1A1] text-sm ml-2">one-time</span>
      </div>

      <ul className="flex flex-col gap-3 mb-10 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check size={15} className="text-[#8DBBFF] mt-0.5 shrink-0" />
            <span className="text-[#A1A1A1] text-sm leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/#contact"
        className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[13.5px] tracking-wide transition-all duration-300 ${
          highlighted
            ? "bg-white text-black hover:bg-[#8DBBFF]"
            : "bg-white/[0.06] text-white border border-white/10 hover:bg-white/10"
        }`}
      >
        Get Started
        <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl overflow-hidden border border-[#232323] hover:border-[#8DBBFF]/25 transition-all duration-300 bg-[#1A1A1A]"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#111] border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-2 h-4 rounded bg-[#1E1E1E] flex items-center px-2.5">
          <span className="text-[#3A3A3A] text-[9px] font-mono">veloria.ie/{project.name.toLowerCase().replace(/[^a-z]/g, "")}</span>
        </div>
      </div>

      {/* Website preview mockup */}
      <div className={`h-44 bg-gradient-to-br ${project.bg} relative overflow-hidden`}>
        {/* Nav bar mockup */}
        <div className="absolute top-0 inset-x-0 h-7 bg-black/30 flex items-center px-4 gap-3">
          <div className="w-12 h-2 rounded-sm" style={{ background: project.accent, opacity: 0.8 }} />
          <div className="flex-1" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-7 h-1.5 rounded-sm bg-white/10" />
          ))}
        </div>

        {/* Hero block mockup */}
        <div className="absolute top-10 left-4 right-4 space-y-1.5">
          <div className="h-3 w-3/4 rounded-sm bg-white/20" />
          <div className="h-2 w-1/2 rounded-sm bg-white/10" />
          <div className="h-2 w-2/5 rounded-sm bg-white/10" />
          <div className="mt-2 h-5 w-20 rounded-md" style={{ background: project.accent, opacity: 0.7 }} />
        </div>

        {/* Bottom content blocks mockup */}
        <div className="absolute bottom-3 left-4 right-4 flex gap-2">
          {[0.7, 1, 0.85].map((o, i) => (
            <div
              key={i}
              className="flex-1 h-8 rounded-lg bg-white/[0.06] border border-white/[0.05]"
              style={{ opacity: o }}
            />
          ))}
        </div>

        {/* Subtle glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 30% 40%, ${project.accent}18 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Card footer */}
      <div className="px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-white font-semibold text-[14px] font-satoshi">{project.name}</p>
          <p className="text-[#A1A1A1] text-[12px] mt-0.5">{project.category}</p>
        </div>
        <span
          className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide border"
          style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
        >
          {project.package}
        </span>
      </div>
    </motion.div>
  );
}

export default function WebsitesPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="pt-40 pb-24 relative overflow-hidden grid-bg">
          <div
            aria-hidden="true"
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(141,187,255,0.1) 0%, transparent 65%)",
              filter: "blur(100px)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="flex flex-col items-center gap-6"
            >
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[#A1A1A1] hover:text-white text-[13px] transition-colors self-start"
              >
                <ChevronLeft size={14} />
                Back to Home
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]">
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  Our Core Service
                </span>
              </div>

              <h1 className="text-5xl md:text-[72px] font-black leading-tight tracking-tight font-satoshi">
                Professional Websites{" "}
                <span className="gradient-text">for Your Business</span>
              </h1>

              <p className="text-[#A1A1A1] text-lg md:text-xl leading-relaxed max-w-2xl">
                We design and build websites that look great, work on any device, and
                help new customers find and trust your business — with no tech knowledge
                needed on your end.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <Link
                  href="/#contact"
                  className="flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
                >
                  <Mail size={14} />
                  Get in Touch
                </Link>
                <a
                  href="#packages"
                  className="px-7 py-3.5 border border-white/14 text-white text-[13.5px] font-medium tracking-wide rounded-full hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  See Packages ↓
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Packages ─────────────────────────────────────── */}
        <section id="packages" className="py-32 bg-[#0C0C0C] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(141,187,255,0.06) 0%, transparent 65%)",
            }}
          />
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  Pricing
                </span>
              </div>
              <h2 className="text-4xl md:text-[52px] font-black leading-tight tracking-tight mb-5 font-satoshi">
                Simple,{" "}
                <span className="gradient-text">Clear Pricing</span>
              </h2>
              <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
                No hidden fees, no confusing add-ons. Pick the package that fits your
                business and we handle the rest.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <PackageCard
                name="Starter Website"
                price="€799"
                tagline="Perfect for sole traders and small businesses getting online for the first time."
                features={starterFeatures}
                delay={0}
              />
              <PackageCard
                name="Business Website"
                price="€1,499"
                tagline="Ideal for established businesses that want a strong, feature-rich online presence."
                features={businessFeatures}
                highlighted
                delay={0.1}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-[#A1A1A1] text-sm mt-8"
            >
              Not sure which one is right for you?{" "}
              <Link href="/#contact" className="text-[#8DBBFF] hover:underline">
                Get in touch
              </Link>{" "}
              and we&apos;ll help you decide — no pressure, no obligation.
            </motion.p>
          </div>
        </section>

        {/* ── Portfolio ─────────────────────────────────────── */}
        <section className="py-32 bg-[#090909] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  Our Work
                </span>
              </div>
              <h2 className="text-4xl md:text-[52px] font-black leading-tight tracking-tight mb-5 font-satoshi">
                Recent{" "}
                <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
                A look at some of the businesses we&apos;ve helped get online. Every
                website is built from scratch — no templates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <section className="py-28 bg-[#0C0C0C] relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(141,187,255,0.07) 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="flex flex-col items-center gap-6"
            >
              <h2 className="text-3xl md:text-[48px] font-black leading-tight tracking-tight font-satoshi">
                Ready to Get Your{" "}
                <span className="gradient-text">Business Online?</span>
              </h2>
              <p className="text-[#A1A1A1] text-lg leading-relaxed">
                Get in touch today and we&apos;ll have a friendly chat about what your
                business needs. We explain everything in plain English — no jargon.
              </p>
              <Link
                href="mailto:hello@veloria.solutions"
                className="flex items-center gap-2.5 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-2xl shadow-white/10"
              >
                <Mail size={15} />
                hello@veloria.solutions
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
