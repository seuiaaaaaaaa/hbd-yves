"use client";

import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

export default function GlassJar({ onClick }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92, rotate: -3 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <svg
        width="220"
        height="260"
        viewBox="0 0 220 260"
        fill="none"
      >
        {/* Lid */}

        <rect
          x="55"
          y="20"
          width="110"
          height="25"
          rx="8"
          fill="#8B5CF6"
        />

        {/* Glass */}

        <rect
          x="40"
          y="40"
          width="140"
          height="180"
          rx="30"
          fill="#ffffff55"
          stroke="#A78BFA"
          strokeWidth="5"
        />

        {/* Highlight */}

        <rect
          x="58"
          y="60"
          width="16"
          height="120"
          rx="10"
          fill="white"
          opacity=".45"
        />

        {/* Notes */}

        <rect
          x="80"
          y="120"
          width="60"
          height="40"
          rx="5"
          fill="#FDE68A"
          transform="rotate(-8 110 140)"
        />

        <rect
          x="90"
          y="145"
          width="55"
          height="35"
          rx="5"
          fill="#FBCFE8"
          transform="rotate(8 120 160)"
        />

      </svg>
    </motion.div>
  );
}
