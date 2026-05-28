"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { ElementType, ReactNode } from "react";

export interface PricingCardProps {
  planName: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
  isPopular?: boolean;
  href?: string;
  icon?: ElementType;
}

interface ModernPricingPageProps {
  title: ReactNode;
  subtitle?: string;
  plans: PricingCardProps[];
  showAnimatedBackground?: boolean;
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(141,187,255,0.11) 0%, transparent 70%)",
          top: "-15%",
          left: "0%",
        }}
        animate={{ x: [0, 50, -20, 0], y: [0, -30, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(141,187,255,0.07) 0%, transparent 70%)",
          top: "20%",
          right: "0%",
        }}
        animate={{ x: [0, -35, 20, 0], y: [0, 45, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 360,
          height: 360,
          background:
            "radial-gradient(circle, rgba(100,155,255,0.06) 0%, transparent 70%)",
          bottom: "-10%",
          left: "35%",
        }}
        animate={{ x: [0, 25, -30, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />
    </div>
  );
}

function PricingCard({ plan, index }: { plan: PricingCardProps; index: number }) {
  const Icon = plan.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="relative flex flex-col h-full"
    >
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
          <span className="px-4 py-1 rounded-full bg-[#8DBBFF] text-black text-[10px] font-black tracking-[0.18em] uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative flex flex-col h-full rounded-2xl p-7 border backdrop-blur-xl transition-all duration-300 group overflow-hidden ${
          plan.isPopular
            ? "bg-white/[0.07] border-[#8DBBFF]/35 shadow-[0_0_32px_rgba(141,187,255,0.1)]"
            : "bg-white/[0.03] border-white/[0.07] hover:border-[#8DBBFF]/20 hover:bg-white/[0.05]"
        }`}
      >
        <div className="relative z-10 flex flex-col gap-5 flex-1">
          {/* Icon */}
          {Icon && (
            <div
              className={`p-3 w-fit rounded-xl transition-colors duration-300 ${
                plan.isPopular
                  ? "bg-[#8DBBFF]/15"
                  : "bg-white/[0.05] group-hover:bg-[#8DBBFF]/10"
              }`}
            >
              <Icon size={24} className="text-[#8DBBFF]" />
            </div>
          )}

          {/* Title */}
          <h3 className="text-white font-bold text-[20px] leading-snug font-satoshi">
            {plan.planName}
          </h3>

          {/* Divider */}
          <div className="h-px bg-white/[0.07]" />

          {/* Features */}
          <ul className="flex flex-col gap-3 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check
                  size={14}
                  className="text-[#8DBBFF] mt-[3px] shrink-0"
                />
                <span className="text-[#A1A1A1] text-[14px] leading-relaxed">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href={plan.href ?? "/#contact"}
            className={`mt-3 flex items-center justify-center py-3 px-5 rounded-full text-[14px] font-bold tracking-wide transition-all duration-300 ${
              plan.buttonVariant === "primary" || plan.isPopular
                ? "bg-[#8DBBFF] text-black hover:bg-white"
                : "bg-white/[0.06] text-white border border-white/10 hover:bg-[#8DBBFF] hover:text-black hover:border-[#8DBBFF]"
            }`}
          >
            {plan.buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ModernPricingPage({
  title,
  subtitle,
  plans,
  showAnimatedBackground = false,
}: ModernPricingPageProps) {
  return (
    <div className="w-full">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Cards + animated background */}
      <div className="relative rounded-3xl p-6">
        {showAnimatedBackground && <AnimatedBackground />}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 items-stretch"
        >
          {plans.map((plan, i) => (
            <PricingCard key={plan.planName} plan={plan} index={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
