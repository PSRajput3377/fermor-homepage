"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  scale?: boolean;
  rotate?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  scale = false,
  rotate = 0,
}: ScrollRevealProps) {
  const movement = {
    up: { x: 0, y: 55 },
    left: { x: -50, y: 8 },
    right: { x: 50, y: 8 },
  };

  const initial = movement[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initial.x,
        y: initial.y,
        scale: scale ? 0.96 : 0.985,
        rotateX: rotate,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.18,
        margin: "-40px 0px -40px 0px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        transformPerspective: 1200,
        transformOrigin: "center center",
      }}
    >
      {children}
    </motion.div>
  );
}