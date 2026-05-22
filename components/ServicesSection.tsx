"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    tag: "Core Service",
    desc: "A professional website that looks great, loads fast, and helps customers find and trust your business.",
    href: "/services/websites",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "The Bundle",
    tag: "Best Value",
    desc: "Website and AI automation built together — fully integrated from day one.",
    href: "/services/bundle",
    featured: true,
  },
  {
    icon: Bot,
    title: "AI Automation",
    tag: "Add-on or Standalone",
    desc: "Smart tools that handle repetitive tasks and save your team hours every week.",
    href: "/services/automation",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
            <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Choose What <span className="gradient-text">Works for You</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            Two core services. One powerful bundle. All built around your business.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
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
              className="relative"
            >
              {svc.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full bg-[#8DBBFF] text-black text-[10px] font-black tracking-[0.18em] uppercase whitespace-nowrap">
                    Best Value
                  </span>
                </div>
              )}
              <Link
                href={svc.href}
                className={`relative group flex flex-col gap-5 p-8 rounded-2xl bg-[#1E1E1E] border transition-all duration-300 overflow-hidden h-full ${
                  svc.featured
                    ? "border-[#8DBBFF]/40 hover:border-[#8DBBFF]/70"
                    : "border-[#232323] hover:border-[#8DBBFF]/20"
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% -10%, rgba(141,187,255,0.07) 0%, transparent 65%)",
                  }}
                />
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 rounded-full bg-[#8DBBFF]/10 text-[#8DBBFF] text-[10px] tracking-[0.18em] uppercase border border-[#8DBBFF]/20">
                    {svc.tag}
                  </span>
                </div>
                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  <div className={`p-3 w-fit rounded-xl transition-colors duration-300 ${svc.featured ? "bg-[#8DBBFF]/10" : "bg-white/[0.04] group-hover:bg-[#8DBBFF]/10"}`}>
                    <svc.icon size={23} className="text-[#8DBBFF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-[18px] mb-2 font-satoshi">
                      {svc.title}
                    </h3>
                    <p className="text-[#A1A1A1] text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[#8DBBFF] text-[13px] font-medium transition-all duration-300 ${svc.featured ? "opacity-100 translate-x-0" : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"}`}>
                    <span>{svc.featured ? "Get the bundle" : "Learn more"}</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
