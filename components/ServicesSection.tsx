"use client";

import { ModernPricingPage, PricingCardProps } from "@/components/ui/animated-glassy-pricing";

const bundles: PricingCardProps[] = [
  {
    planName: "Business Website",
    price: "Custom Quote",
    priceNote: "Pricing based on the scope of your one-time project",
    features: [
      "Custom website design",
      "Mobile-responsive layout",
      "SEO optimisation",
      "Fast load performance",
      "Contact forms & lead capture",
    ],
    buttonText: "Get a Quote",
    buttonVariant: "secondary",
    href: "/services/websites",
  },
  {
    planName: "Full-Service Retainer",
    price: "Tailored to You",
    priceNote: "An ongoing retainer shaped around your business needs",
    savingsNote: "Best value — everything handled for you",
    features: [
      "Complete website design & management",
      "Intelligent chatbot integration",
      "Reservation system included",
      "Automated appointment booking",
      "Ongoing maintenance & updates",
      "Dedicated support & strategy",
    ],
    buttonText: "Talk to Us",
    buttonVariant: "primary",
    href: "/services/retainer",
    isPopular: true,
  },
  {
    planName: "Intelligent Chatbot Solutions",
    price: "Custom Quote",
    priceNote: "Priced to fit your chatbot build",
    features: [
      "AI-powered chat interface",
      "24/7 automated responses",
      "FAQ & knowledge base integration",
      "Lead qualification & routing",
      "Multi-platform support",
    ],
    buttonText: "Get a Quote",
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
