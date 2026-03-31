"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MotionWrapper({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  // Defer animations until after hydration to prevent SSR/client style mismatch.
  // Server + initial client render: initial={false} → no inline opacity/transform in HTML.
  // After mount: switch to the animated initial state so whileInView triggers correctly.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const canAnimate = mounted && !shouldReduceMotion;

  return (
    <motion.div
      initial={canAnimate ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={
        canAnimate
          ? { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }
          : { duration: 0 }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
