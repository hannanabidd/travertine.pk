import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const PRODUCTS = [
  {
    title: 'Travertine Bathtub',
    body: 'Hand-finished freestanding tub in natural travertine. Solid construction with polished or honed interior surface.',
    specs: '≥ 1,000 kg incl. packing · FOB Karachi · Custom sizing',
    src: '/images/bathtub.png',
    alt: 'Hand-finished freestanding travertine bathtub with a rough-hewn exterior and polished interior basin',
    artifact: true,
  },
  {
    title: 'Dining Table Top',
    body: '2″ slab in natural travertine, hollowed from beneath, reducing shipping weight by over 75% while preserving full surface integrity, vein, and pattern.',
    specs: '96″ × 40″ · 2″ thick face · < 250 kg shipped · Hollow-core base',
    src: '/images/raw-stone-06.jpg',
    alt: 'Natural travertine slab face showing consistent grain and vein pattern',
    artifact: false,
  },
];

const RANGE_ITEMS = [
  {
    n: '01',
    text: 'Bottle forms and decorative vessels',
    alt: 'Pair of green onyx decorative bottle forms with fitted stoppers',
    src: '/images/accessories07.JPG',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
  {
    n: '02',
    text: 'Sculptural decorative objects, hand-finished',
    alt: 'Sculptural onyx ornament carved in the form of a high-heel shoe',
    src: '/images/accessories09.JPG',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
  {
    n: '03',
    text: 'Plinths and display pieces',
    alt: 'Row of five hand-carved onyx finials of varying height and profile',
    src: '/images/accessories05.JPG',
    sizes: '100vw',
  },
  {
    n: '04',
    text: 'Basins, trays, and finials, cut to order',
    alt: 'Fluted travertine shell display with a row of hand-carved decorative finials in front',
    src: '/images/accessories02.png',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
];

export default function AccessoriesProducts() {
  return (
    <section className="sec-pad" id="products">
      <div className="wrap">
        <div className="eyebrow reveal">Our Range</div>
        <div className="kicker-row reveal">
          <h2>Featured Pieces.</h2>
        </div>

        <div className="product-grid reveal">
          {PRODUCTS.map((p) => (
            <div className="product-card" key={p.title}>
              <div className={`product-media${p.artifact ? ' artifact' : ''}`}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="product-body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="product-specs">{p.specs}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 80 }}>
          <div className="eyebrow">Accessories Range</div>
          <div className="kicker-row" style={{ marginBottom: 0 }}>
            <h2>Bespoke, Cut to Your Design.</h2>
            <p className="desc">Bespoke pieces crafted to your design and measurements.</p>
          </div>
        </div>

        <div className="acc-grid reveal" style={{ marginTop: 44 }}>
          {RANGE_ITEMS.map((item) => (
            <div className="acc-card" key={item.n}>
              <Image src={item.src} alt={item.alt} fill sizes={item.sizes} />
              <div className="acc-body">
                <span className="n">{item.n}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="advantage-strip reveal">
          <p>We&apos;d welcome the opportunity to share our catalogue and pricing.</p>
          <Link href="/contact" className="btn btn-light">
            Request Catalogue & Pricing
            <LuArrowRight size={16} />
          </Link>
        </div>

        <p className="reveal" style={{ marginTop: 32, fontSize: 12.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--umber-soft)' }}>
          travertine.pk &middot; Export Enquiries
        </p>
      </div>
    </section>
  );
}
