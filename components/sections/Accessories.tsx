import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  {
    n: '01',
    text: 'Vessel sinks, cut from natural onyx',
    alt: 'Hand-carved oval onyx vessel sink with vivid orange and red mineral banding',
    src: '/images/artifacts01.png',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
  {
    n: '02',
    text: 'Bowls, trays, and decorative vessels',
    alt: 'Polished amber onyx bowl with natural mineral banding',
    src: '/images/artifacts02.png',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
  {
    n: '03',
    text: 'Vases and decorative objects, hand-finished',
    alt: 'Row of five hand-finished green and red onyx vases showing natural veining',
    src: '/images/artifacts07.png',
    sizes: '100vw',
  },
  {
    n: '04',
    text: 'Bespoke centerpieces and sculptural pieces',
    alt: 'Carved green onyx gazebo sculpture with an inset cloisonne vase',
    src: '/images/artifacts04.png',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
];

export default function Accessories() {
  return (
    <section className="sec-pad" id="accessories">
      <div className="wrap">
        <div className="eyebrow reveal">Material Continuity</div>
        <div className="kicker-row reveal">
          <h2>
            Your Cladding.
            <br />
            Your Interiors. One Stone.
          </h2>
          <p className="desc">
            travertine.pk offers a service rarely found in natural stone supply: we craft accessories
            and furniture from the exact same stone used in your building&apos;s cladding.
          </p>
        </div>
        <p className="section-lead reveal">
          This means complete material continuity: the travertine in your bathroom tray shares the same
          geological origin as the stone on your façade. The veining, the colour, the surface character
          are all consistent, from the exterior envelope to the smallest interior detail. You no longer
          need to order a full block for small-scale items. Share your design; we handle fabrication,
          finishing, and shipping.
        </p>
        <div className="acc-grid reveal">
          {ITEMS.map((item) => (
            <div className="acc-card artifact" key={item.n}>
              <Image src={item.src} alt={item.alt} fill sizes={item.sizes} />
              <div className="acc-body">
                <span className="n">{item.n}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="advantage-strip reveal">
          <p>
            A reduction in material waste. A saving on procurement. A more sustainable, more coherent
            approach to natural stone in architecture.
          </p>
          <Link href="/contact" className="btn btn-light">
            Submit Your Design
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
