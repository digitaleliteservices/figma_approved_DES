import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedStatNumber
 * Smoothly animates a number from 0 to `target` using requestAnimationFrame
 * with an easeOutExpo curve for premium visual appeal.
 * 
 * Animates automatically on initial page open and re-animates whenever
 * scrolled into view.
 */
export const AnimatedStatNumber = ({
  target = 0,
  prefix = '',
  suffix = '',
  duration = 1800,
  isVisible = true,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const animRef = useRef(null);

  useEffect(() => {
    if (!isVisible) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      setCount(0);
      return;
    }

    let startTime = null;
    const startVal = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo: fast initial climb, graceful smooth deceleration
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(startVal + (target - startVal) * ease);

      setCount(current);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <span
      className={`tabular-nums inline-block ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedStatNumber;
