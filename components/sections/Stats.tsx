'use client';

import { useEffect, useRef, useState } from 'react';

interface StatDef {
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const STATS: StatDef[] = [
  {
    target: 30,
    suffix: '+',
    label: 'Countries Served',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="15.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M17 1.5c4 4.2 6 9.6 6 15.5s-2 11.3-6 15.5c-4-4.2-6-9.6-6-15.5s2-11.3 6-15.5z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2.5 17h29" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    target: 10,
    suffix: '+',
    label: 'Years of Export Experience',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="15.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M17 9v8l6 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    target: 25,
    suffix: 'T+',
    label: 'Maximum Block Weight Supplied',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M17 4v26M9 8h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M4 8l5 10a5 5 0 01-10 0l5-10zM25 8l5 10a5 5 0 01-10 0l5-10z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    target: 500,
    suffix: '+',
    label: 'Projects Completed Globally',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="15.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 17.5l4.5 4.5 9-10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
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
      <div className="wrap">
        <div className="eyebrow reveal">By the Numbers</div>
        <h2 className="stats-heading reveal">
          The Numbers Behind
          <br />
          Our Reputation.
        </h2>
        <div className="stats-grid reveal">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
