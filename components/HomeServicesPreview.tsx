"use client";

import { motion } from "framer-motion";
import { Globe, Bot, Calendar, CalendarCheck, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    name: "Business Website",
    description: "Custom, mobile-ready websites built to convert visitors into customers.",
    href: "/services/websites",
  },
  {
    icon: Bot,
    name: "Intelligent Chatbot",
    description: "AI-powered chat that handles enquiries and qualifies leads 24/7.",
    href: "/services/chatbot",
  },
  {
    icon: Calendar,
    name: "Reservation System",
    description: "Real-time online booking with automated confirmations and reminders.",
    href: "/services/reservation",
  },
  {
    icon: CalendarCheck,
    name: "Appointment Booking",
    description: "Smart scheduling that syncs with your calendar and reduces no-shows.",
    href: "/services/booking",
  },
  {
    icon: Layers,
    name: "Full-Service Retainer",
    description: "Everything above, maintained and evolved by us every month.",
    href: "/services/retainer",
  },
];

export default function HomeServicesPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-[52px] font-black leading-tight tracking-tight mb-4 font-satoshi">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            Five focused services. One team. Delivered end-to-end.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 p-6 h-full"
                >
                  <div className="p-3 w-fit rounded-xl bg-white/[0.05] group-hover:bg-[#8DBBFF]/10 transition-colors duration-300">
                    <Icon size={22} className="text-[#8DBBFF]" />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3 className="text-white font-bold text-[15px] font-satoshi">{s.name}</h3>
                    <p className="text-[#A1A1A1] text-[13px] leading-relaxed">{s.description}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#8DBBFF] text-[12px] font-semibold tracking-wide group-hover:gap-2.5 transition-all duration-200">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-[#A1A1A1] hover:text-white hover:border-white/25 text-[13px] font-medium transition-all duration-300"
          >
            View all services <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
