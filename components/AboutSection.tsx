"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Built using the latest, proven technology",
  "Smart tools included in everything we build",
  "Grows with your business, no matter the size",
  "We handle everything from start to finish",
];

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "100%", label: "On-Time Launch" },
  { value: "5★", label: "Client Rating" },
  { value: "3", label: "Countries Served" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(141,187,255,0.07) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left col — existing content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-8">
              <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                About Veloria
              </span>
            </div>

            <h2 className="text-4xl md:text-[52px] font-black leading-tight tracking-tight mb-7 font-satoshi">
              Real Solutions,{" "}
              <span className="gradient-text">Built Around</span>
              <br />
              Your Business.
            </h2>

            <div className="flex flex-col gap-4 text-[#A1A1A1] text-[15px] leading-relaxed mb-10">
              <p>
                We are Veloria Solutions — a team of web designers, developers, and
                problem-solvers dedicated to helping businesses like yours succeed online.
              </p>
              <p>
                We take the time to understand your business before we build anything.
                Every website and tool we create is made to fit the way you work — not
                the other way around.
              </p>
              <p>
                Whether you need a simple website or something more involved, we make
                the whole process easy, clear, and stress-free from start to finish.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.09, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={17} className="text-[#8DBBFF] shrink-0" />
                  <span className="text-white text-[14px]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right col — stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300 p-8"
              >
                <span className="text-4xl font-black tracking-tight gradient-text font-satoshi">
                  {stat.value}
                </span>
                <span className="text-[#A1A1A1] text-[13px] text-center leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
