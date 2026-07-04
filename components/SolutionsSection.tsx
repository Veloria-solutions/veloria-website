"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import WorkCarousel, { WorkImage } from "@/components/WorkCarousel";

const websiteShots: WorkImage[] = Array.from({ length: 11 }, (_, i) => ({
  src: `/work/websites/website-${String(i + 1).padStart(2, "0")}.png`,
  width: 2936,
  height: 1644,
  alt: `Website project ${i + 1}`,
}));

const chatbotShots: WorkImage[] = [
  { src: "/work/chatbots/chatbot-01.png", width: 1402, height: 1122, alt: "Chatbot project 1" },
  { src: "/work/chatbots/chatbot-02.png", width: 863, height: 1823, alt: "Chatbot project 2" },
];

/* ── Section ─────────────────────────────────────────────── */
const solutions = [
  {
    tag: "Web Design",
    title: "Website Design & Development",
    desc: "Custom, mobile-ready websites built to convert visitors into customers — from landing pages to full multi-page sites.",
    href: "/services/websites",
    shots: websiteShots,
  },
  {
    tag: "Chatbot & Automation",
    title: "Chatbot & Automation Suite",
    desc: "AI-powered chat that handles enquiries, qualifies leads, and books appointments automatically — 24 hours a day.",
    href: "/services/chatbot",
    shots: chatbotShots,
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Built for Your{" "}
            <span className="gradient-text">Business</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            Two of our most popular solutions — shown in action.
            Everything is custom-built around how you work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {solutions.map((sol, i) => (
            <div key={sol.title} className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <WorkCarousel images={sol.shots} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.3 }}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <span className="text-[#8DBBFF] text-[10px] tracking-[0.22em] uppercase block mb-1">
                    {sol.tag}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1.5 font-satoshi">
                    {sol.title}
                  </h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{sol.desc}</p>
                </div>
                <Link
                  href={sol.href}
                  aria-label={`View ${sol.title}`}
                  className="shrink-0 p-2.5 rounded-full border border-white/10 hover:border-[#8DBBFF]/40 text-[#A1A1A1] hover:text-[#8DBBFF] transition-all duration-200 mt-1"
                >
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
