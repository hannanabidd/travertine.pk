'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Category = 'quarry' | 'craft' | 'interiors';
type FilterKey = 'all' | Category;

interface GalleryItem {
  src: string;
  alt: string;
  cap: string;
  category: Category;
}

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'quarry', label: 'Quarry & Raw Stone' },
  { key: 'craft', label: 'Furniture & Accessories' },
  { key: 'interiors', label: 'Finished Interiors' },
];

const CATEGORY_LABEL: Record<Category, string> = {
  quarry: 'Quarry & Raw Stone',
  craft: 'Furniture & Accessories',
  interiors: 'Finished Interiors',
};

const ITEMS: GalleryItem[] = [
  {
    category: 'quarry',
    cap: 'Cut quarry blocks stacked against the Loralai skyline',
    alt: 'Stacked cut travertine quarry blocks against a cloudy sky',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240818_151025-YBgj8alpQVUvl0y5.jpg',
  },
  {
    category: 'quarry',
    cap: 'The Loralai range, source of our travertine',
    alt: 'Mountain range in Loralai, Balochistan, the origin of our travertine',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240818_160725-YBgj8aloLoivBRZ0.jpg',
  },
  {
    category: 'quarry',
    cap: 'Quarry face detail after extraction',
    alt: 'Close-up of banded travertine stone at the quarry face',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240818_142044-ALp2OqBJQkSlbybp.jpg',
  },
  {
    category: 'craft',
    cap: 'Carved travertine wall panel, geometric relief detail',
    alt: 'Close-up of a hand-carved geometric travertine wall panel',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/img-20250715-wa0066-m5K82Lla34uzKkwn.jpg',
  },
  {
    category: 'craft',
    cap: 'Bespoke dining table on a stacked stone plinth',
    alt: 'Bespoke travertine dining table with a stacked stone plinth base',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240908_095109-YD0EDBOoz8u4k83B.jpg',
  },
  {
    category: 'craft',
    cap: 'Vessel sinks finished and racked for shipment',
    alt: 'Rows of finished natural stone vessel sinks ready for shipment',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/img-20250715-wa0072-YX4jXa1gRacwyVR2.jpg',
  },
  {
    category: 'craft',
    cap: 'Green onyx vases, hand-finished',
    alt: 'Row of hand-finished green onyx decorative vases',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/img-20250715-wa0080-AE07Ma2wwBHPN6MW.jpg',
  },
  {
    category: 'craft',
    cap: 'Onyx architectural rotunda artifact',
    alt: 'Carved onyx architectural rotunda artifact on display',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/img_20250914_154402_942--665769073-YNqMpPrp3Wu85xlM.jpg',
  },
  {
    category: 'interiors',
    cap: 'Finished travertine interior with marble floor inlay',
    alt: 'Finished interior with full travertine wall cladding and a dark marble floor inlay',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240807_183549-YKb8aE7gMzuDry60.jpg',
  },
  {
    category: 'interiors',
    cap: 'Entrance staircase clad in travertine with a marble threshold',
    alt: 'Entrance hall staircase clad in travertine with a marble floor inlay',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240807_212543-mePg1bBJOnuJpWE9.jpg',
  },
  {
    category: 'interiors',
    cap: 'Sculptural raw-edge travertine feature wall, living room',
    alt: 'Living room with a sculptural raw-edge travertine feature wall',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240813_211844-YX4jXa5oD4CgjXpy.jpg',
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState<FilterKey>('all');
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const active = ITEMS.find((i) => i.src === lightboxSrc) ?? null;
  const visible = filter === 'all' ? ITEMS : ITEMS.filter((i) => i.category === filter);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightboxSrc(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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

        <div className="gallery-filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid reveal">
          {visible.map((item) => (
            <div key={item.src} className="g-item" onClick={() => setLightboxSrc(item.src)}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 900px) 33vw, 25vw"
              />
              <span className="g-cap">{CATEGORY_LABEL[item.category]}</span>
              <span className="g-plus">+</span>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 56 }}>
          <Link href="/gallery" className="btn btn-ghost">
            View Full Gallery
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>

      <div
        className={`lightbox${active ? ' open' : ''}`}
        onClick={() => setLightboxSrc(null)}
        role="dialog"
        aria-modal="true"
        aria-hidden={!active}
      >
        <button
          className="lightbox-close"
          aria-label="Close image"
          onClick={(e) => {
            e.stopPropagation();
            setLightboxSrc(null);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        {active && (
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <Image src={active.src.replace(/w=\d+,h=\d+/, 'w=1600')} alt={active.alt} fill sizes="90vw" />
          </div>
        )}
        <div className="lightbox-cap">{active?.cap}</div>
      </div>
    </section>
  );
}
