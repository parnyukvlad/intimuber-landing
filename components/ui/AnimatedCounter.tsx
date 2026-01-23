'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  from,
  to,
  suffix = '',
  duration = 2000
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          const startTime = Date.now();
          const endTime = startTime + duration;

          const updateCounter = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(from + (to - from) * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`counter-${to}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [from, to, duration, hasAnimated]);

  return (
    <span id={`counter-${to}`}>
      {count}{suffix}
    </span>
  );
}