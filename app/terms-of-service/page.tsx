import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Veloria Solutions website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.",
      "We reserve the right to update these terms at any time. Continued use of our website or services after any changes constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "2. Services Provided",
    content: [
      "Veloria Solutions provides website design and development, AI-powered chatbot solutions, reservation systems, automated appointment booking services, and full-service digital retainer packages for businesses.",
      "The scope, timeline, and deliverables for each project are agreed upon in writing before work commences. Any changes to the agreed scope may affect the timeline and cost and will be communicated to you promptly.",
    ],
  },
  {
    title: "3. Payment Terms",
    content: [
      "One-time project fees are outlined in your project agreement. A deposit is typically required before work begins, with the remaining balance due on project completion unless otherwise agreed in writing.",
      "Monthly retainer services are billed on a recurring basis as specified in your service agreement. Invoices are due within 14 days of issue. Late payments may result in a pause of services until the outstanding balance is settled.",
      "All prices are exclusive of VAT where applicable. Veloria Solutions reserves the right to adjust pricing for ongoing services with at least 30 days' written notice.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "Upon receipt of full payment, you retain ownership of the final website design, copy, and assets created specifically for your project. Veloria Solutions retains the right to showcase completed work in our portfolio and marketing materials unless you request otherwise in writing.",
      "Third-party assets (such as stock photography, fonts, or plugins) are subject to their own licensing terms. It is your responsibility to ensure continued compliance with any third-party licences after project handover.",
      "Veloria Solutions retains ownership of any proprietary tools, frameworks, or methodologies used during the development process.",
    ],
  },
  {
    title: "5. Limitation of Liability",
    content: [
      "Veloria Solutions will not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website, including but not limited to loss of revenue, data, or business opportunities.",
      "Our total liability to you in connection with any services shall not exceed the total amount paid by you to Veloria Solutions in the three months prior to the claim.",
      "We make every effort to ensure our work meets the agreed specification, but we cannot guarantee specific business outcomes such as increased sales, search engine rankings, or customer acquisition.",
    ],
  },
  {
    title: "6. Confidentiality",
    content: [
      "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, customer data, pricing, and technical details.",
      "This confidentiality obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "Either party may terminate a project or service agreement with 30 days' written notice. In the event of termination, you will be invoiced for all work completed up to the termination date.",
      "Veloria Solutions reserves the right to terminate services immediately if you breach these terms or engage in conduct that is harmful to our business or reputation.",
    ],
  },
  {
    title: "8. Contact Us",
    content: [
      "If you have any questions about these Terms of Service, please contact us:",
      "Email: info@veloria.solutions\nWebsite: veloria.solutions",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative z-[1]">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-[56px] font-black leading-tight tracking-tight font-satoshi mb-4">
            Terms of Service
          </h1>
          <p className="text-[#A1A1A1] text-sm">Last updated: May 2026</p>
          <div className="mt-6 h-px bg-white/[0.08]" />
        </div>

        {/* Intro */}
        <p className="text-[#A1A1A1] text-[15px] leading-relaxed mb-12">
          These Terms of Service govern your use of the Veloria Solutions website and any
          services we provide. Please read them carefully before engaging our services.
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
