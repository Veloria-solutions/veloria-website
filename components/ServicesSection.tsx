"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Calendar, CalendarCheck, Layers, Check } from "lucide-react";
import Link from "next/link";

const bundles = [
  {
    icon: Globe,
    title: "Business Website",
    description:
      "A professional website that looks great, loads fast, and helps customers find and trust your business.",
    features: [
      "Custom website design",
      "Mobile-responsive layout",
      "SEO optimisation",
      "Fast load performance",
      "Contact forms & lead capture",
    ],
    coreSolution:
      "Creating a strong online presence that builds credibility and generates leads.",
    href: "/#contact",
    isPopular: false,
  },
  {
    icon: Bot,
    title: "Intelligent Chatbot Solutions",
    description:
      "AI-powered chatbots that automate customer interactions, answer questions, and improve response times.",
    features: [
      "AI-powered chat interface",
      "24/7 automated responses",
      "FAQ & knowledge base integration",
      "Lead qualification & routing",
      "Multi-platform support",
    ],
    coreSolution:
      "Automating customer communication and support to save time and improve engagement.",
    href: "/#contact",
    isPopular: false,
  },
  {
    icon: Layers,
    title: "Full-Service Retainer",
    description:
      "All four services fully integrated and maintained every month — one team, one strategy, complete coverage.",
    features: [
      "Complete website design & management",
      "Intelligent chatbot integration",
      "Reservation system included",
      "Automated appointment booking",
      "Ongoing maintenance & updates",
      "Dedicated support & strategy",
    ],
    coreSolution:
      "A complete digital solution managed monthly so your business stays ahead, always.",
    href: "/#contact",
    isPopular: true,
  },
  {
    icon: Calendar,
    title: "Reservation Systems",
    description:
      "Streamlined reservation platforms that simplify scheduling and enhance customer experience.",
    features: [
      "Online booking interface",
      "Real-time availability calendar",
      "Automated confirmation emails",
      "Customer management dashboard",
      "Multi-location support",
    ],
    coreSolution:
      "Simplifying and organizing bookings to improve efficiency and customer convenience.",
    href: "/#contact",
    isPopular: false,
  },
  {
    icon: CalendarCheck,
    title: "Automated Appointment Booking",
    description:
      "Smart booking solutions that automate appointments, confirmations, reminders, and client management.",
    features: [
      "Smart scheduling system",
      "Automated reminders & notifications",
      "Calendar sync & integrations",
      "Client self-service portal",
      "Analytics & reporting",
    ],
    coreSolution:
      "Reducing manual scheduling through automated booking, reminders, and calendar management.",
    href: "/#contact",
    isPopular: false,
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
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Our Five <span className="gradient-text">Bundles</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto leading-relaxed">
            Veloria Solutions delivers professional website design, intelligent chatbots, reservation systems, and automated appointment booking services. Four core services. All built around your business.
          </p>
        </motion.div>

        {/* Bundle cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 items-start"
        >
          {bundles.map((bundle) => (
            <motion.div
              key={bundle.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="relative flex flex-col h-full"
            >
              {/* Most Popular badge */}
              {bundle.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                  <span className="px-4 py-1 rounded-full bg-[#8DBBFF] text-black text-[10px] font-black tracking-[0.18em] uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative flex flex-col h-full rounded-2xl p-6 border transition-all duration-300 overflow-hidden group ${
                  bundle.isPopular
                    ? "bg-[#161e2a] border-[#8DBBFF]/50 shadow-[0_0_40px_rgba(141,187,255,0.08)]"
                    : "bg-[#1E1E1E] border-[#232323] hover:border-[#8DBBFF]/20"
                }`}
              >
                {/* Hover / popular glow */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    bundle.isPopular ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle at 50% -10%, rgba(141,187,255,0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  {/* Icon */}
                  <div
                    className={`p-3 w-fit rounded-xl transition-colors duration-300 ${
                      bundle.isPopular
                        ? "bg-[#8DBBFF]/15"
                        : "bg-white/[0.04] group-hover:bg-[#8DBBFF]/10"
                    }`}
                  >
                    <bundle.icon size={22} className="text-[#8DBBFF]" />
                  </div>

                  {/* Title & description */}
                  <div>
                    <h3 className="text-white font-bold text-[16px] leading-snug mb-2 font-satoshi">
                      {bundle.title}
                    </h3>
                    <p className="text-[#A1A1A1] text-[12.5px] leading-relaxed">
                      {bundle.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2">
                    {bundle.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check
                          size={12}
                          className="text-[#8DBBFF] mt-[3px] shrink-0"
                        />
                        <span className="text-[#A1A1A1] text-[11.5px] leading-relaxed">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Core Solution */}
                  <div className="pt-4 border-t border-white/[0.06] mt-auto">
                    <span className="block text-[#8DBBFF]/50 uppercase tracking-[0.16em] text-[9.5px] font-semibold mb-1">
                      Core Solution
                    </span>
                    <p className="text-[#8DBBFF]/70 text-[11.5px] leading-relaxed">
                      {bundle.coreSolution}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={bundle.href}
                    className={`mt-2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-bold tracking-wide transition-all duration-300 ${
                      bundle.isPopular
                        ? "bg-[#8DBBFF] text-black hover:bg-white"
                        : "bg-white/[0.06] text-white border border-white/10 hover:bg-[#8DBBFF] hover:text-black hover:border-[#8DBBFF]"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
