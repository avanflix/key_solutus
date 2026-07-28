"use client";

import { motion } from "framer-motion";

/**
 * The Keysolutus signature device: an abstracted single-line diagram (SLD) —
 * the schematic notation switchgear engineers draw every day. Used as a
 * quiet structural motif (dividers, hero composition, hover states) rather
 * than generic decoration.
 */
export function SingleLineDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 2"
        preserveAspectRatio="none"
        className="h-px w-full"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="1"
          x2="400"
          y2="1"
          stroke="#D9E4EE"
          strokeWidth="1"
          strokeDasharray="1 7"
        />
      </svg>
    </div>
  );
}

export function SLDNode({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="12" y1="0" x2="12" y2="7.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="12" y1="16.5" x2="12" y2="24" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function HeroSchematic() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <g stroke="#8FB2CE" strokeWidth="1.2" opacity="0.55">
        <line x1="60" y1="40" x2="60" y2="380" />
        <line x1="60" y1="90" x2="220" y2="90" />
        <line x1="60" y1="190" x2="220" y2="190" />
        <line x1="60" y1="290" x2="220" y2="290" />
        <line x1="260" y1="90" x2="460" y2="90" />
        <line x1="260" y1="190" x2="460" y2="190" />
        <line x1="260" y1="290" x2="460" y2="290" />
      </g>
      <motion.g
        stroke="#3E6E99"
        strokeWidth="1.6"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <motion.line x1="60" y1="40" x2="60" y2="380" />
      </motion.g>
      {[90, 190, 290].map((y) => (
        <rect
          key={y}
          x="220"
          y={y - 14}
          width="40"
          height="28"
          rx="4"
          stroke="#3E6E99"
          strokeWidth="1.4"
          fill="#F5F9FC"
        />
      ))}
      {[90, 190, 290].map((y) => (
        <circle key={`c-${y}`} cx="60" cy={y} r="5" fill="#3E6E99" />
      ))}
      {[90, 190, 290].map((y) => (
        <circle key={`n-${y}`} cx="460" cy={y} r="5" stroke="#3E6E99" strokeWidth="1.4" fill="#FFFFFF" />
      ))}
    </svg>
  );
}
