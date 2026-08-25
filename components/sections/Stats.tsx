'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LuGlobe, LuClock, LuScale, LuCircleCheck } from 'react-icons/lu';

const PHOTO_SRC = '/images/raw-stone-03.jpg';

interface StatDef {
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const STATS: StatDef[] = [
  { target: 30, suffix: '+', label: 'Countries Served', icon: <LuGlobe /> },
  { target: 10, suffix: '+', label: 'Years of Export Experience', icon: <LuClock /> },
  { target: 25, suffix: 'T+', label: 'Maximum Block Weight Supplied', icon: <LuScale /> },
  { target: 500, suffix: '+', label: 'Projects Completed Globally', icon: <LuCircleCheck /> },
];

function StatItem({ target, suffix, label, icon }: StatDef) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;

          if (reduceMotion) {
            setValue(target);
            io.unobserve(el);
            return;
          }

          const duration = 1400;
          const start = performance.now();
          function tick(now: number) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div className="stat">
      <div className="icon">{icon}</div>
      <div className="num" ref={ref}>
        {value}
        {suffix}
      </div>
      <div className="lbl">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-bar">
      <Image
        className="stats-photo"
        src={PHOTO_SRC}
        alt="Two stacked raw travertine blocks with a crane visible in the background at the quarry"
        fill
        sizes="100vw"
      />
      <div className="stats-scrim" />
      <div className="wrap">
        <div className="eyebrow">By the Numbers</div>
        <h2 className="stats-heading">
          The Numbers Behind
          <br />
          Our Reputation.
        </h2>
        <div className="stats-grid">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
