"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Custom automation workflows built around how you work",
  "Handles repetitive tasks automatically",
  "Saves hours of manual work every week",
  "Works in the background — no extra effort from your team",
  "No tech knowledge needed to use it",
  "Ongoing support included",
];

const steps = [
  {
    n: "01",
    title: "We map your workflow",
    desc: "We find where your team is losing time to repetitive tasks.",
  },
  {
    n: "02",
    title: "We build the automation",
    desc: "Custom tools built specifically for your business processes.",
  },
  {
    n: "03",
    title: "It runs itself",
    desc: "You approve it, we deploy it, and it works quietly in the background.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AutomationPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(141,187,255,0.1) 0%, transparent 70%)",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]">
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  AI Automation
                </span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[72px] font-black leading-[0.95] tracking-tight font-satoshi"
            >
              Stop doing manually what a{" "}
              <span className="gradient-text">machine can do for you.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#A1A1A1] text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              We set up smart automation tools that handle your repetitive tasks —
              saving your team hours every single week.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
              >
                Book a free consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
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
                What You Get
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Your time back,{" "}
              <span className="gradient-text">every week.</span>
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
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
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
              We do the hard part,{" "}
              <span className="gradient-text">you reap the rewards.</span>
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
                className="flex gap-6 items-start p-6 rounded-2xl bg-[#1E1E1E] border border-[#232323]"
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
      <section className="py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(141,187,255,0.07) 0%, transparent 68%)",
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
              Ready to get your{" "}
              <span className="gradient-text">time back?</span>
            </h2>
            <p className="text-[#A1A1A1] text-lg leading-relaxed">
              We&apos;ll walk you through exactly what we can automate for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
            >
              Book a free consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
