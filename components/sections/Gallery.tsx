'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const ITEMS = [
  {
    alt: 'Raw travertine quarry wall in Loralai, Balochistan, showing natural banded stone strata and a reflective water pool',
    cap: 'Quarry wall, Loralai',
    src: '/images/raw-stone-09.jpg',
  },
  {
    alt: 'Raw travertine block with quarry identification markings and a crane hook suspended above, in the quarry yard',
    cap: 'Quarry yard, block tagged for cutting',
    src: '/images/raw-stone-12.png',
  },
  {
    alt: 'Modern house facade clad in travertine with a curved tower and ornate iron gate',
    cap: 'Exterior cladding, curved tower',
    src: '/images/interior07.png',
  },
  {
    alt: 'Grand entrance hall with a carved wooden double door, a secondary staircase door, and a marble floor inlay rug',
    cap: 'Entrance hall, double doors',
    src: '/images/interior06.png',
  },
  {
    alt: 'Rough-cut travertine block beside processing machinery at the quarry',
    cap: 'Rough block, ready for transport',
    src: '/images/raw-stone-07.jpg',
  },
  {
    alt: 'Massive raw travertine block freshly cut at the quarry face, stacked and ready for transport',
    cap: 'Block face, natural grain',
    src: '/images/raw-stone-06.jpg',
  },
  {
    alt: 'Living room feature wall in organic-cut travertine slab with a butterfly pattern beneath a chandelier',
    cap: 'Feature wall, formal living room',
    src: '/images/interior03.png',
  },
  {
    alt: 'Foyer with a wooden door, travertine walls, and a dark and gold stone floor inlay',
    cap: 'Entrance hall, floor inlay',
    src: '/images/interior02.png',
  },
  {
    alt: 'Raw travertine block suspended from a crane hook, marked with quarry identification tags',
    cap: 'Freshly extracted block, tagged',
    src: '/images/raw-stone-13.png',
  },
  {
    alt: 'A worker standing beside a freshly quarried raw travertine block, showing its natural scale',
    cap: 'Scale of a single block',
    src: '/images/raw-stone-18.png',
  },
  {
    alt: 'Grand foyer with a carved wooden double door and travertine-clad staircase',
    cap: 'Foyer, staircase detail',
    src: '/images/interior11.png',
  },
];

const LOOP_ITEMS = [...ITEMS, ...ITEMS];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const SPEED = 1.5;
    let raf: number;
    let pos = track.scrollLeft;

    function tick() {
      if (track) {
        const singleSetWidth = track.scrollWidth / 2;
        if (!pausedRef.current) {
          pos += SPEED;
          if (singleSetWidth > 0 && pos >= singleSetWidth) {
            pos -= singleSetWidth;
          }
          track.scrollLeft = pos;
        } else {
          pos = track.scrollLeft;
        }
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    function pauseForAWhile() {
      pausedRef.current = true;
      clearTimeout(resumeTimeout.current);
      resumeTimeout.current = setTimeout(() => {
        pausedRef.current = false;
      }, 1200);
    }
    track.addEventListener('wheel', pauseForAWhile, { passive: true });
    track.addEventListener('touchstart', pauseForAWhile, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimeout.current);
      track.removeEventListener('wheel', pauseForAWhile);
      track.removeEventListener('touchstart', pauseForAWhile);
    };
  }, []);

  return (
    <section className="sec-pad" id="gallery" style={{ background: '#f8fafc' }}>
      <div className="wrap">
        <div className="eyebrow reveal">In Detail</div>
        <div className="kicker-row reveal">
          <h2>Stone, Close Up.</h2>
          <p className="desc">
            Quarry to workshop to finished room: a closer look at the material and the craft behind it.
          </p>
        </div>
      </div>

      <div className="wrap reveal">
        <div
          className="filmstrip"
          ref={trackRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          {LOOP_ITEMS.map((item, i) => (
            <Link href="/gallery" className="film-card" key={`${item.src}-${i}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 220px, 280px" />
              <span className="film-cap">{item.cap}</span>
            </Link>
          ))}
        </div>
        <div className="film-scroll-hint">
          Hover to pause, scroll to browse
          <LuArrowRight />
        </div>
      </div>

      <div className="reveal" style={{ textAlign: 'center', marginTop: 56 }}>
        <Link href="/gallery" className="btn btn-ghost">
          View Full Gallery
          <LuArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
