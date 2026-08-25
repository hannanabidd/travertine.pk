'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LuX, LuPlus } from 'react-icons/lu';

type Category = 'quarry' | 'interiors' | 'artifacts';
type FilterKey = 'all' | Category;

interface GalleryItem {
  src: string;
  alt: string;
  cap: string;
  category: Category;
  artifact?: boolean;
}

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'quarry', label: 'Quarry & Raw Stone' },
  { key: 'interiors', label: 'Interiors & Architecture' },
  { key: 'artifacts', label: 'Artifacts & Fixtures' },
];

const ITEMS: GalleryItem[] = [
  { category: 'quarry', src: '/images/raw-stone-02.jpg', alt: 'Quarry landscape in Loralai with mountain peak, a loaded truck, and stacked raw blocks', cap: 'The quarry, Loralai, Balochistan' },
  { category: 'quarry', src: '/images/raw-stone-13.png', alt: 'Raw travertine block suspended from a crane hook, marked with quarry identification tags', cap: 'Freshly extracted block, tagged' },
  { category: 'quarry', src: '/images/raw-stone-03.jpg', alt: 'Quarry wall corner showing banded travertine strata above a reflective water pool', cap: 'Extraction face, corner cut' },
  { category: 'quarry', src: '/images/raw-stone-07.jpg', alt: 'Rough-cut travertine block beside processing machinery at the quarry', cap: 'Rough block, ready for transport' },
  { category: 'quarry', src: '/images/raw-stone-10.jpg', alt: 'Long panoramic view of a quarry wall with dramatic clouds overhead', cap: 'Quarry wall, full face' },
  { category: 'quarry', src: '/images/raw-stone-08.jpg', alt: 'Raw travertine quarry wall with stepped blocks and coiled cable in the foreground', cap: 'Extraction face detail' },
  { category: 'quarry', src: '/images/raw-stone-04.jpg', alt: 'Two stacked raw travertine blocks with a crane visible in the background', cap: 'Blocks staged for processing' },
  { category: 'quarry', src: '/images/raw-stone-06.jpg', alt: 'Massive raw travertine block freshly cut at the quarry face, stacked and ready for transport', cap: 'Block face, natural grain' },
  { category: 'quarry', src: '/images/raw-stone-14.png', alt: 'Large travertine block stack with quarry crane machinery in the background', cap: 'Block yard, staged for export' },
  { category: 'quarry', src: '/images/raw-stone-01.jpg', alt: 'Wide quarry landscape with mountains, raw blocks, and a worker walking the site', cap: 'The site, wide view' },

  { category: 'interiors', src: '/images/interior07.png', alt: 'Modern house facade clad in travertine with a curved tower and ornate iron gate', cap: 'Exterior cladding, curved tower' },
  { category: 'interiors', src: '/images/interior03.png', alt: 'Living room feature wall in organic-cut travertine slab with a butterfly pattern beneath a chandelier', cap: 'Feature wall, formal living room' },
  { category: 'interiors', src: '/images/interior10.png', alt: 'Formal dining room with an organic-edge travertine table top on a stacked-disc pedestal', cap: 'Dining table, bespoke pedestal' },
  { category: 'interiors', src: '/images/interior08.png', alt: 'Grand foyer with travertine-clad walls, a carved wooden door, and a staircase', cap: 'Entrance foyer and staircase' },
  { category: 'interiors', src: '/images/interior05.png', alt: 'Shower wall with an organic-cut travertine slab centerpiece', cap: 'Bathroom feature wall' },
  { category: 'interiors', src: '/images/interior02.png', alt: 'Foyer with a wooden door, travertine walls, and a dark and gold stone floor inlay', cap: 'Entrance hall, floor inlay' },
  { category: 'interiors', src: '/images/interior01.png', alt: 'Framed Arabic calligraphy flanked by two onyx columns beneath a backlit ceiling feature', cap: 'Display niche, onyx columns' },
  { category: 'interiors', src: '/images/interior06.png', alt: 'Living room with an organic travertine feature wall behind a television console', cap: 'Living room, feature wall' },
  { category: 'interiors', src: '/images/interior11.png', alt: 'Grand foyer with a carved wooden double door and travertine-clad staircase', cap: 'Foyer, staircase detail' },
  { category: 'interiors', src: '/images/interior04.png', alt: 'Large room with an arched organic-cut travertine slab wall feature', cap: 'Reception room, slab feature' },
  { category: 'interiors', src: '/images/interior09.png', alt: 'Framed calligraphy artwork on a console flanked by travertine columns', cap: 'Console display, columns' },

  { category: 'artifacts', src: '/images/artifacts01.png', alt: 'Hand-carved oval onyx vessel sink with vivid orange and red mineral banding', cap: 'Vessel sink, banded onyx', artifact: true },
  { category: 'artifacts', src: '/images/artifacts02.png', alt: 'Polished amber onyx bowl with natural mineral banding', cap: 'Bowl, amber onyx', artifact: true },
  { category: 'artifacts', src: '/images/artifacts03.png', alt: 'Pale onyx oval vessel sink with a natural red vein accent', cap: 'Vessel sink, pale onyx', artifact: true },
  { category: 'artifacts', src: '/images/artifacts07.png', alt: 'Row of five hand-finished green and red onyx vases showing natural veining', cap: 'Vases, hand-finished onyx', artifact: true },
  { category: 'artifacts', src: '/images/artifacts08.png', alt: 'Pair of tall green and orange onyx vases shown front and back', cap: 'Vase pair, front and back', artifact: true },
  { category: 'artifacts', src: '/images/artifacts04.png', alt: 'Carved green onyx gazebo sculpture with an inset cloisonne vase', cap: 'Sculptural centerpiece', artifact: true },
  { category: 'artifacts', src: '/images/artifacts05.png', alt: 'Carved green onyx gazebo sculpture with an inset cloisonne vase, alternate angle', cap: 'Sculptural centerpiece, detail', artifact: true },
  { category: 'artifacts', src: '/images/artifacts06.png', alt: 'Carved travertine floral relief medallion', cap: 'Relief carving, floral motif', artifact: true },
  { category: 'artifacts', src: '/images/artifacts09.png', alt: 'Catalog grid of sixteen white marble vessel sinks', cap: 'Vessel sinks, marble range', artifact: true },
  { category: 'artifacts', src: '/images/artifacts10.png', alt: 'Catalog grid of twelve green onyx vessel sinks', cap: 'Vessel sinks, onyx range', artifact: true },
];

export default function GalleryShowcase() {
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
    <section className="sec-pad">
      <div className="wrap">
        <div className="eyebrow reveal">The Full Collection</div>
        <div className="kicker-row reveal">
          <h2>Every Stage, in Detail.</h2>
          <p className="desc">
            Extraction, application, and finished pieces. Filter by category or browse everything.
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
            <div
              key={item.src}
              className={`g-item${item.artifact ? ' artifact' : ''}`}
              onClick={() => setLightboxSrc(item.src)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 900px) 33vw, 25vw"
              />
              <span className="g-cap">{item.cap}</span>
              <span className="g-plus">
                <LuPlus size={14} />
              </span>
            </div>
          ))}
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
          <LuX size={18} />
        </button>
        {active && (
          <div
            className="lightbox-frame"
            onClick={(e) => e.stopPropagation()}
            style={
              active.artifact
                ? { background: 'radial-gradient(ellipse 75% 70% at 50% 45%, var(--cream) 0%, var(--stone) 100%)' }
                : undefined
            }
          >
            <Image src={active.src.replace(/w=\d+,h=\d+/, 'w=1600')} alt={active.alt} fill sizes="90vw" />
          </div>
        )}
        <div className="lightbox-cap">{active?.cap}</div>
      </div>
    </section>
  );
}
