"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Calendar, CalendarCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Business Website",
    desc: "A professional website that looks great, loads fast, and helps customers find and trust your business.",
    coreSolution: "Creating a strong online presence that builds credibility and generates leads.",
    href: "/services/websites",
  },
  {
    icon: Bot,
    title: "Intelligent Chatbot Solutions",
    desc: "AI-powered chatbots that automate customer interactions, answer questions, and improve response times.",
    coreSolution: "Automating customer communication and support to save time and improve engagement.",
    href: "/services/automation",
  },
  {
    icon: Calendar,
    title: "Reservation Systems",
    desc: "Streamlined reservation platforms that simplify scheduling and enhance customer experience.",
    coreSolution: "Simplifying and organizing bookings to improve efficiency and customer convenience.",
    href: "/services/reservation",
  },
  {
    icon: CalendarCheck,
    title: "Automated Appointment Booking",
    desc: "Smart booking solutions that automate appointments, confirmations, reminders, and client management.",
    coreSolution: "Reducing manual scheduling through automated booking, reminders, and calendar management.",
    href: "/services/booking",
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
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Choose What <span className="gradient-text">Works for You</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto leading-relaxed">
            Veloria Solutions delivers professional website design, intelligent chatbots, reservation systems, and automated appointment booking services. Four core services. All built around your business.
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
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
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
              <Link
                href={svc.href}
                className="relative group flex flex-col gap-5 p-8 rounded-2xl bg-[#1E1E1E] border border-[#232323] hover:border-[#8DBBFF]/20 transition-all duration-300 overflow-hidden h-full"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% -10%, rgba(141,187,255,0.07) 0%, transparent 65%)",
                  }}
                />
                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  <div className="p-3 w-fit rounded-xl bg-white/[0.04] group-hover:bg-[#8DBBFF]/10 transition-colors duration-300">
                    <svc.icon size={23} className="text-[#8DBBFF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-[18px] mb-2 font-satoshi">
                      {svc.title}
                    </h3>
                    <p className="text-[#A1A1A1] text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-[#8DBBFF]/70 text-[12px] leading-relaxed tracking-wide">
                      <span className="text-[#8DBBFF]/50 uppercase tracking-[0.16em] text-[10px] font-semibold block mb-1">
                        Core Solution
                      </span>
                      {svc.coreSolution}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8DBBFF] text-[13px] font-medium opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                    <span>Learn more</span>
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
