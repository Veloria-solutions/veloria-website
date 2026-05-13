"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* Ambient radial glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] rounded-full"
        animate={{ x: pos.x - 250, y: pos.y - 250, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 160, mass: 0.5 }}
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(141,187,255,0.045) 0%, transparent 65%)",
        }}
      />
      {/* Small crisp dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        animate={{ x: pos.x - 3, y: pos.y - 3, opacity: visible ? 0.7 : 0 }}
        transition={{ type: "spring", damping: 40, stiffness: 600 }}
        style={{ width: 6, height: 6, backgroundColor: "#8DBBFF" }}
      />
    </>
  );
}
