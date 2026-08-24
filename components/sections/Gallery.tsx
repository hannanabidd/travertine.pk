import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  {
    artifact: false,
    alt: 'Quarry landscape in Loralai with mountain peak, a loaded truck, and stacked raw blocks',
    cap: 'The quarry, Loralai',
    src: '/images/raw-stone-12.png',
  },
  {
    artifact: false,
    alt: 'Close-up of banded travertine stone at the quarry face',
    cap: 'Quarry face detail',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/20240818_142044-ALp2OqBJQkSlbybp.jpg',
  },
  {
    artifact: true,
    alt: 'Hand-carved oval onyx vessel sink with vivid orange and red mineral banding',
    cap: 'Onyx vessel sink',
    src: '/images/artifacts01.png',
  },
  {
    artifact: false,
    alt: 'Modern house facade clad in travertine with a curved tower and ornate iron gate',
    cap: 'Exterior cladding',
    src: '/images/interior07.png',
  },
  {
    artifact: false,
    alt: 'Living room feature wall in organic-cut travertine slab with a butterfly pattern',
    cap: 'Feature wall, Lahore',
    src: '/images/interior03.png',
  },
  {
    artifact: true,
    alt: 'Row of five hand-finished green and red onyx vases showing natural veining',
    cap: 'Onyx vases',
    src: '/images/artifacts07.png',
  },
  {
    artifact: false,
    alt: 'Close-up of a hand-carved geometric travertine wall panel',
    cap: 'Carved wall panel',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=600,h=750,fit=crop/iDgzyGvHyDWkHZUO/img-20250715-wa0066-m5K82Lla34uzKkwn.jpg',
  },
  {
    artifact: false,
    alt: 'Raw travertine quarry wall with stepped blocks and coiled cable in the foreground',
    cap: 'Extraction face',
    src: '/images/raw-stone-08.jpg',
  },
  {
    artifact: false,
    alt: 'Formal dining room with an organic-edge travertine table top on a stacked-disc pedestal',
    cap: 'Dining table, bespoke',
    src: '/images/interior10.png',
  },
];

export default function Gallery() {
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
        <div className="filmstrip">
          {ITEMS.map((item) => (
            <Link href="/gallery" className={`film-card${item.artifact ? ' artifact' : ''}`} key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 220px, 280px" />
              <span className="film-cap">{item.cap}</span>
            </Link>
          ))}
        </div>
        <div className="film-scroll-hint">
          Scroll to explore
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <div className="reveal" style={{ textAlign: 'center', marginTop: 56 }}>
        <Link href="/gallery" className="btn btn-ghost">
          View Full Gallery
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
