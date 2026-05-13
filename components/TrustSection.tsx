"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BrainCircuit, Building2 } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Enterprise-grade security protocols protecting every layer of your infrastructure by design.",
  },
  {
    icon: Zap,
    title: "Scalable",
    desc: "Systems architected to scale seamlessly from MVP to millions of users without rearchitecting.",
  },
  {
    icon: BrainCircuit,
    title: "AI Powered",
    desc: "Intelligent automation and machine learning embedded at the core of every solution we build.",
  },
  {
    icon: Building2,
    title: "Enterprise Ready",
    desc: "Production-grade reliability, SLA guarantees, and compliance standards trusted globally.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.06]"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ backgroundColor: "rgba(141,187,255,0.03)" }}
              className="group px-8 py-10 flex flex-col gap-4 transition-colors duration-300 cursor-default"
            >
              <div className="p-3 w-fit rounded-xl bg-white/[0.04] group-hover:bg-[#8DBBFF]/10 transition-colors duration-300">
                <item.icon size={22} className="text-[#8DBBFF]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px] mb-1.5 font-satoshi">
                  {item.title}
                </h3>
                <p className="text-[#A1A1A1] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
