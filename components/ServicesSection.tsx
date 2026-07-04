"use client";

import { Bot, Globe, Layers } from "lucide-react";
import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const bundles: PricingCardProps[] = [
  {
    icon: Globe,
    planName: "Business Website",
    price: "€699",
    priceNote: "one-time payment",
    features: [
      "Custom website design",
      "Mobile-responsive layout",
      "SEO optimisation",
      "Fast load performance",
      "Contact forms & lead capture",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
    href: "/services/websites",
  },
  {
    icon: Layers,
    planName: "Full-Service Retainer",
    price: "€50",
    priceNote: "/month · 12-month commitment",
    savingsNote: "Save €99 compared to the €699 one-time price",
    features: [
      "Complete website design & management",
      "Intelligent chatbot integration",
      "Reservation system included",
      "Automated appointment booking",
      "Ongoing maintenance & updates",
      "Dedicated support & strategy",
    ],
    buttonText: "Get Started",
    buttonVariant: "primary",
    href: "/services/retainer",
    isPopular: true,
  },
  {
    icon: Bot,
    planName: "Intelligent Chatbot Solutions",
    price: "€699",
    priceNote: "one-time payment",
    features: [
      "AI-powered chat interface",
      "24/7 automated responses",
      "FAQ & knowledge base integration",
      "Lead qualification & routing",
      "Multi-platform support",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
    href: "/services/chatbot",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ModernPricingPage
          title={
            <>
              Choose What{" "}
              <span className="gradient-text">Works for You</span>
            </>
          }
          subtitle="Veloria Solutions delivers professional website design, intelligent chatbots, reservation systems, and automated appointment booking services. All built around your business."
          plans={bundles}
          showAnimatedBackground={true}
        />
      </div>
    </section>
  );
}
