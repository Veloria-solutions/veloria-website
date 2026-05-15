"use client";

import { motion } from "framer-motion";
import { Search, Layers, Code2, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "We Listen",
    desc: "We sit down with you to understand your business, your goals, and exactly what you need — no jargon, just a conversation.",
  },
  {
    num: "02",
    icon: Layers,
    title: "We Plan",
    desc: "We put together a clear plan and show you what we're going to build before any work begins, so there are no surprises.",
  },
  {
    num: "03",
    icon: Code2,
    title: "We Build",
    desc: "We carefully build your website or tool, testing every part along the way to make sure everything looks and works perfectly.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "We Launch",
    desc: "We go live with your website and stay available to help — you're never left on your own after handover.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-[#090909] relative overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
            <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            How It{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-lg mx-auto leading-relaxed">
            A simple four-step process to get your business online — clear,
            straightforward, and stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+56px)] right-[calc(12.5%+56px)] h-px bg-[#232323] overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-[#8DBBFF]/70 via-[#8DBBFF]/30 to-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon block */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mb-8 w-[104px] h-[104px] rounded-2xl bg-[#1A1A1A] border border-[#232323] flex items-center justify-center group-hover:border-[#8DBBFF]/30 group-hover:bg-[#8DBBFF]/[0.05] transition-all duration-300"
                >
                  <step.icon size={30} className="text-[#8DBBFF]" />
                  {/* Step number badge */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#090909] border border-[#232323] flex items-center justify-center">
                    <span className="text-[#8DBBFF] text-[9px] font-bold tracking-wider">
                      {step.num}
                    </span>
                  </div>
                </motion.div>

                <h3 className="text-white font-bold text-[18px] mb-3 font-satoshi">
                  {step.title}
                </h3>
                <p className="text-[#A1A1A1] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
