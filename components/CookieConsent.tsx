"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("veloria-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("veloria-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("veloria-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 px-5 py-4 rounded-2xl bg-[#111] border border-white/[0.08] backdrop-blur-xl shadow-2xl shadow-black/60">
        {/* Text */}
        <p className="text-[#A1A1A1] text-[13px] leading-relaxed flex-1">
          We use cookies to improve your experience and analyse site traffic. By clicking
          &quot;Accept&quot; you consent to our use of cookies.{" "}
          <Link href="/cookie-policy" className="text-[#8DBBFF] hover:underline underline-offset-2">
            Cookie Policy
          </Link>{" "}
          &middot;{" "}
          <Link href="/privacy-policy" className="text-[#8DBBFF] hover:underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-full text-[12px] font-semibold text-[#A1A1A1] border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-full text-[12px] font-bold bg-white text-black hover:bg-[#8DBBFF] transition-all duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
