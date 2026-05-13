"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cloud, Lock, Globe, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    desc: "Automate complex workflows with intelligent systems that learn and adapt to your operations, reducing manual effort by up to 80%.",
    tag: "Most Popular",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Bespoke software engineered to your exact specifications — scalable, maintainable, and built for the long run.",
    tag: null,
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable, secure cloud architectures on AWS, GCP, or Azure designed for peak performance and resilience.",
    tag: null,
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    desc: "Comprehensive security frameworks, penetration testing, and continuous threat monitoring to protect your digital assets.",
    tag: null,
  },
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "Premium web applications and SaaS platforms built for performance, exceptional UX, and high conversion rates.",
    tag: null,
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Strategic technology consulting to align your IT infrastructure with business objectives and accelerate growth.",
    tag: null,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
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
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Everything You Need to{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            From intelligent automation to enterprise infrastructure — end-to-end
            technology solutions built to last.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="relative group p-8 rounded-2xl bg-[#1E1E1E] border border-[#232323] hover:border-[#8DBBFF]/20 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% -10%, rgba(141,187,255,0.07) 0%, transparent 65%)",
                }}
              />

              {/* Tag */}
              {svc.tag && (
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 rounded-full bg-[#8DBBFF]/10 text-[#8DBBFF] text-[10px] tracking-[0.18em] uppercase border border-[#8DBBFF]/20">
                    {svc.tag}
                  </span>
                </div>
              )}

              <div className="relative z-10 flex flex-col gap-5">
                <div className="p-3 w-fit rounded-xl bg-white/[0.04] group-hover:bg-[#8DBBFF]/10 transition-colors duration-300">
                  <svc.icon size={23} className="text-[#8DBBFF]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[18px] mb-2 font-satoshi">
                    {svc.title}
                  </h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[#8DBBFF] text-[13px] font-medium opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
