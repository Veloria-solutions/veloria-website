"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface WorkImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function WorkCarousel({ images }: { images: WorkImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });
  const [dragging, setDragging] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  function scrollByDir(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }

  /* Mouse drag-to-scroll (touch devices scroll natively) */
  function onPointerDown(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft };
    setDragging(true);
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current.active) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  }

  function onPointerUp() {
    drag.current.active = false;
    setDragging(false);
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={updateArrows}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing" : "cursor-grab snap-x snap-proximity"
        }`}
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="snap-start shrink-0 rounded-2xl overflow-hidden border border-white/[0.07] bg-[#181818]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              draggable={false}
              className="h-56 md:h-64 w-auto select-none pointer-events-none"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
        ))}
      </div>

      {canLeft && (
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByDir(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:border-[#8DBBFF]/40 hover:text-[#8DBBFF] transition-all duration-200"
        >
          <ChevronLeft size={16} />
        </button>
      )}
      {canRight && (
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByDir(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:border-[#8DBBFF]/40 hover:text-[#8DBBFF] transition-all duration-200"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}
