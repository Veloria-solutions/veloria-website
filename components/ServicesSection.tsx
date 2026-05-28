"use client";

import { Bot, Globe, Calendar, CalendarCheck, Layers } from "lucide-react";
import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const bundles: PricingCardProps[] = [
  {
    icon: Globe,
    planName: "Business Website",
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
    icon: Bot,
    planName: "Intelligent Chatbot Solutions",
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
  {
    icon: Layers,
    planName: "Full-Service Retainer",
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
    icon: Calendar,
    planName: "Reservation Systems",
    features: [
      "Online booking interface",
      "Real-time availability calendar",
      "Automated confirmation emails",
      "Customer management dashboard",
      "Multi-location support",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
    href: "/services/reservation",
  },
  {
    icon: CalendarCheck,
    planName: "Automated Appointment Booking",
    features: [
      "Smart scheduling system",
      "Automated reminders & notifications",
      "Calendar sync & integrations",
      "Client self-service portal",
      "Analytics & reporting",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
    href: "/services/booking",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
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
