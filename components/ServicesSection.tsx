"use client";

import { motion } from "framer-motion";
import { Bot, Layout } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Layout,
    title: "Business Websites",
    desc: "We build you a professional website that looks great, loads fast, and helps new customers find and trust your business.",
    tag: "Core Focus",
    href: "/websites",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "We set up smart tools that handle repetitive tasks for you automatically — saving your team hours of work every week.",
    tag: "Most Popular",
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
            <span className="gradient-text">Grow</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            We build professional websites for businesses and power them with
            intelligent software — everything you need to grow online.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((svc) => {
            const cardInner = (
              <>
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
                    <span>{svc.href ? "See packages" : "Learn more"}</span>
                    <span>→</span>
                  </div>
                </div>
              </>
            );

            const sharedClass =
              "relative group p-8 rounded-2xl bg-[#1E1E1E] border border-[#232323] hover:border-[#8DBBFF]/20 transition-all duration-300 overflow-hidden block";

            return (
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
              >
                {svc.href ? (
                  <Link href={svc.href} className={sharedClass + " cursor-pointer"}>
                    {cardInner}
                  </Link>
                ) : (
                  <div className={sharedClass + " cursor-default"}>
                    {cardInner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
