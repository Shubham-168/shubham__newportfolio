"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

type RevealSectionProps = HTMLMotionProps<"section">;

export function RevealSection({ children, ...props }: RevealSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
