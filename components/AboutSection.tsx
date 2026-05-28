"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Built using the latest, proven technology",
  "Smart tools included in everything we build",
  "Grows with your business, no matter the size",
  "We handle everything from start to finish",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#0C0C0C] relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — copy */}
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

          {/* Right — futuristic visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square max-w-[440px] mx-auto">
              {/* Main card */}
              <div className="absolute inset-0 rounded-3xl bg-[#1A1A1A] border border-[#232323] overflow-hidden">
                {/* Grid overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(141,187,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(141,187,255,0.07) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                  }}
                />
                {/* Centre glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(141,187,255,0.1) 0%, transparent 68%)",
                  }}
                />

                {/* V mark watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                  <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
                    <path d="M5 8 L50 90 L95 8 L80 8 L50 66 L20 8 Z" fill="white" />
                    <path d="M23 8 L50 60 L77 8 L66 8 L50 46 L34 8 Z" fill="#1A1A1A" />
                  </svg>
                </div>

                {/* Orbiting rings */}
                {[160, 220, 280].map((size, i) => (
                  <motion.div
                    key={size}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{
                      duration: 28 + i * 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-1/2 left-1/2 rounded-full border border-white/[0.06]"
                    style={{
                      width: size,
                      height: size,
                      marginLeft: -size / 2,
                      marginTop: -size / 2,
                    }}
                  >
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#8DBBFF]"
                      style={{ opacity: 0.5 + i * 0.1 }}
                    />
                  </motion.div>
                ))}

                {/* Floating stat cards */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-7 right-7 glass rounded-xl px-4 py-3"
                >
                  <div className="text-white font-black text-xl font-satoshi leading-none">20+</div>
                  <div className="text-[#A1A1A1] text-[10px] tracking-[0.18em] mt-1">PROJECTS</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-7 left-7 glass rounded-xl px-4 py-3"
                >
                  <div className="text-[#8DBBFF] font-black text-xl font-satoshi leading-none">
                    5★
                  </div>
                  <div className="text-[#A1A1A1] text-[10px] tracking-[0.18em] mt-1">RATING</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
