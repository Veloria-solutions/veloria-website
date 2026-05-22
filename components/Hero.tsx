"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { WovenCanvas } from "@/components/ui/woven-light-hero";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* ── Background FX ─────────────────────────────────── */}
      <WovenCanvas />

      {/* ── Main content ──────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Pill badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DBBFF] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8DBBFF]" />
              </span>
              <span className="text-[#A1A1A1] text-[11px] tracking-[0.22em] uppercase">
                Websites &amp; Digital Tools for Businesses
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[0.93] tracking-tight max-w-5xl font-satoshi"
          >
            We build. We automate.{" "}
            <span className="gradient-text">You grow.</span>
          </motion.h1>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/services"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-[13.5px] font-bold tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
            >
              Get Started
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>

          {/* Floating stats card */}
          <motion.div variants={fadeUp} className="mt-4 w-full max-w-lg">
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl px-6 py-5 flex items-center justify-between glow-blue"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[#A1A1A1] text-[11px] tracking-[0.18em] uppercase">
                  Active Now
                </span>
              </div>

              <div className="flex items-center gap-7">
                {[
                  { value: "20+", label: "Projects" },
                  { value: "5★", label: "Reviews" },
                  { value: "48hr", label: "Response", accent: true },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center gap-0.5">
                    <span
                      className={`font-black text-lg leading-none font-satoshi ${
                        stat.accent ? "text-[#8DBBFF]" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[#A1A1A1] text-[9.5px] tracking-[0.2em] uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-white/25 to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
