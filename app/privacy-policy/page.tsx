import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "When you contact us through our website, we may collect personal information such as your name, email address, phone number, and details about your business. This information is provided voluntarily when you fill in our contact form or reach out to us directly.",
      "We also collect non-personal data automatically when you visit our website, including your IP address, browser type, pages visited, and time spent on the site. This is collected via analytics tools to help us understand how our website is used.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information you provide to respond to your enquiries, provide the services you have requested, and send you updates relevant to your project or our services.",
      "We do not sell, rent, or share your personal data with third parties for marketing purposes. Your data is used solely to deliver and improve our services.",
    ],
  },
  {
    title: "3. Cookies",
    content: [
      "Our website uses cookies to enhance your browsing experience. Cookies are small text files placed on your device that help us understand site traffic and improve functionality. You can control cookie settings through your browser at any time.",
      "For full details on the cookies we use, please see our Cookie Policy.",
    ],
  },
  {
    title: "4. Third-Party Services",
    content: [
      "We may use third-party services such as Google Analytics to analyse website traffic. These services may collect and process data in accordance with their own privacy policies. We encourage you to review the privacy policies of any third-party services we use.",
      "Our website may be hosted on third-party infrastructure providers. These providers are contractually required to protect your data and may not use it for any purpose other than providing hosting services.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact enquiries are typically retained for up to 24 months.",
      "You may request deletion of your personal data at any time by contacting us at the details below.",
    ],
  },
  {
    title: "6. Your Rights (GDPR)",
    content: [
      "Under the General Data Protection Regulation (GDPR), if you are located in the European Economic Area, you have the following rights regarding your personal data:",
      "Right of access — you may request a copy of the personal data we hold about you. Right to rectification — you may request correction of inaccurate or incomplete data. Right to erasure — you may request that we delete your personal data. Right to data portability — you may request your data in a structured, machine-readable format. Right to object — you may object to the processing of your personal data in certain circumstances.",
      "To exercise any of these rights, please contact us using the details below. We will respond within 30 days.",
    ],
  },
  {
    title: "7. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or how we handle your data, please contact us:",
      "Email: info@veloria.solutions\nWebsite: veloria.solutions",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative z-[1]">
      <DottedSurface />
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-[56px] font-black leading-tight tracking-tight font-satoshi mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#A1A1A1] text-sm">Last updated: May 2026</p>
          <div className="mt-6 h-px bg-white/[0.08]" />
        </div>

        {/* Intro */}
        <p className="text-[#A1A1A1] text-[15px] leading-relaxed mb-12">
          Veloria Solutions (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and safeguard your
          personal information when you visit our website or use our services.
        </p>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-white font-bold text-[20px] font-satoshi mb-4">
                {s.title}
              </h2>
              <div className="flex flex-col gap-3">
                {s.content.map((p, i) => (
                  <p key={i} className="text-[#A1A1A1] text-[14.5px] leading-relaxed whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-8 h-px bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
