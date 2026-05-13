"use client";

interface VeloriaLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export default function VeloriaLogo({
  size = 34,
  showText = true,
  className = "",
}: VeloriaLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* V mark — geometric chevron matching Veloria brand */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer filled V */}
        <path d="M5 8 L50 90 L95 8 L80 8 L50 66 L20 8 Z" fill="currentColor" />
        {/* Inner cutout creating bold stroke V */}
        <path d="M23 8 L50 60 L77 8 L66 8 L50 46 L34 8 Z" fill="#090909" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none select-none">
          <span
            className="text-white font-black tracking-[0.2em] text-[17px]"
            style={{ fontFamily: "'Satoshi', 'Inter', sans-serif" }}
          >
            VELORIA
          </span>
          <span className="text-white/40 text-[8.5px] tracking-[0.28em] mt-[2px]">
            — SOLUTIONS —
          </span>
        </div>
      )}
    </div>
  );
}
