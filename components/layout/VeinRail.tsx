'use client';

import { useEffect, useRef } from 'react';

export default function VeinRail() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    function update() {
      if (!path) return;
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(scrolled / max, 1) : 0;
      path.style.strokeDashoffset = `${len - len * pct}`;
    }

    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="vein-rail" aria-hidden="true">
      <svg viewBox="0 0 3 800" preserveAspectRatio="none">
        <path
          ref={pathRef}
          d="M1.5,0 C2.5,120 0.5,180 1.5,300 C2.3,420 0.7,480 1.5,620 C2,700 1,740 1.5,800"
        />
      </svg>
    </div>
  );
}
