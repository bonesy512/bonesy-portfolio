"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GsapWrapperProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  parallax?: boolean;
}

export function GsapWrapper({
  children,
  delay = 0,
  yOffset = 50,
  duration = 1.2,
  stagger = 0,
  className = "",
  parallax = false,
}: GsapWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(containerRef.current, {
        y: yOffset,
        opacity: 0,
        rotateX: -10,
        filter: "blur(10px)",
        duration: duration,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Optional Parallax
      if (parallax) {
        gsap.to(containerRef.current, {
          y: -yOffset * 1.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset, parallax]);

  return (
    <div
      ref={containerRef}
      className={`${className} will-change-transform will-change-opacity`}
      style={{ backfaceVisibility: "hidden" }}
    >
      {children}
    </div>
  );
}
