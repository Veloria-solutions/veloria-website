"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Everything in Business Websites",
  "Everything in AI Automation",
  "Fully integrated — your site and automation built together",
  "No handover problems between separate suppliers",
  "Priority support",
  "Best value — costs less than buying both separately",
];

const steps = [
  {
    n: "01",
    title: "One conversation",
    desc: "We scope everything together: your website and your automation needs.",
  },
  {
    n: "02",
    title: "One build",
    desc: "Designed and developed as a single system, not two bolted together.",
  },
  {
    n: "03",
    title: "One launch",
    desc: "Everything goes live together, fully connected and ready to grow.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function BundlePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(141,187,255,0.13) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center gap-7"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8DBBFF]/30 bg-[#8DBBFF]/[0.07]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DBBFF] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8DBBFF]" />
                </span>
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  Best Value · Most Popular
                </span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[72px] font-black leading-[0.95] tracking-tight font-satoshi"
            >
              A website and automation that{" "}
              <span className="gradient-text">work together from day one.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#A1A1A1] text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Get both services built as one seamless system — better integrated,
              better value, and ready to grow with your business.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8DBBFF] text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-white hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-[#8DBBFF]/20"
              >
                Get the bundle
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-[#0C0C0C]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
              <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                What You Get
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              The complete package,{" "}
              <span className="gradient-text">built as one.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#8DBBFF]/[0.04] border border-[#8DBBFF]/15"
              >
                <CheckCircle2 size={17} className="text-[#8DBBFF] shrink-0" />
                <span className="text-white text-[14px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
              <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              One team, one build,{" "}
              <span className="gradient-text">one launch.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-[#1E1E1E] border border-[#8DBBFF]/20"
              >
                <span className="text-[#8DBBFF] font-black text-2xl font-satoshi shrink-0 leading-none mt-0.5">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-white font-bold text-[17px] mb-1.5 font-satoshi">{step.title}</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#0C0C0C] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(141,187,255,0.09) 0%, transparent 68%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col items-center gap-7"
          >
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Ready to build something{" "}
              <span className="gradient-text">that works together?</span>
            </h2>
            <p className="text-[#A1A1A1] text-lg leading-relaxed">
              One conversation. We&apos;ll scope everything and show you exactly what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8DBBFF] text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-white hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-[#8DBBFF]/20"
            >
              Get the bundle
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
