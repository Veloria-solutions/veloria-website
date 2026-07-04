import Navbar from "@/components/Navbar";
import { DottedSurface } from "@/components/ui/dotted-surface";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. What Are Cookies",
    content: [
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners.",
      "Cookies can be session cookies (deleted when you close your browser) or persistent cookies (stored on your device for a set period or until you delete them manually).",
    ],
  },
  {
    title: "2. Cookies We Use",
    content: [
      "Essential Cookies — These are necessary for our website to function correctly. They enable core features such as page navigation and access to secure areas. You cannot opt out of these cookies as the site cannot function without them.",
      "Analytics Cookies — We use Google Analytics to understand how visitors interact with our website. This helps us improve content and user experience. These cookies collect anonymised data including pages visited, time spent on site, and traffic sources. Analytics cookies are only set with your consent.",
      "Preference Cookies — These cookies remember your settings and choices (such as your cookie consent preference) so you do not have to re-enter them each time you visit.",
    ],
  },
  {
    title: "3. Managing Cookies",
    content: [
      "You can control and manage cookies in your browser settings. Most browsers allow you to view, block, or delete cookies. Please note that disabling certain cookies may affect the functionality of our website.",
      "To manage cookies in your browser, refer to the help documentation for your specific browser:\n• Chrome: Settings → Privacy and Security → Cookies\n• Firefox: Options → Privacy and Security → Cookies and Site Data\n• Safari: Preferences → Privacy → Manage Website Data\n• Edge: Settings → Cookies and Site Permissions",
      "You can also opt out of Google Analytics across all websites by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.",
    ],
  },
  {
    title: "4. Third-Party Cookies",
    content: [
      "Some cookies on our website are set by third-party services. These include Google Analytics for website performance tracking. Third-party cookies are governed by the respective third party's privacy policy.",
      "We do not have direct control over the information collected by third-party cookies. We recommend reviewing the privacy policies of any third-party services for more information on how they handle your data.",
    ],
  },
  {
    title: "5. Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any updates will be posted on this page with a revised date.",
      "We encourage you to review this page periodically to stay informed about our use of cookies.",
    ],
  },
  {
    title: "6. Contact Us",
    content: [
      "If you have questions about our use of cookies, please contact us:",
      "Email: info@veloria.solutions\nWebsite: veloria.solutions",
    ],
  },
];

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="text-[#A1A1A1] text-sm">Last updated: May 2026</p>
          <div className="mt-6 h-px bg-white/[0.08]" />
        </div>

        {/* Intro */}
        <p className="text-[#A1A1A1] text-[15px] leading-relaxed mb-12">
          This Cookie Policy explains how Veloria Solutions uses cookies and similar
          tracking technologies on our website. By continuing to browse our site, you
          consent to our use of cookies as described below.
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
