import Image from 'next/image';
import Link from 'next/link';

const ITEMS = [
  {
    n: '01',
    text: 'Bathroom accessories: soap dishes, trays, vessels',
    alt: 'Hand-finished stone vessel sink, one of our bathroom accessory pieces',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=520,h=650,fit=crop/iDgzyGvHyDWkHZUO/img-20250715-wa0067-YZ9E7xazK3IXba8k.jpg',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
  {
    n: '02',
    text: 'Shelves, display trays, and decorative objects',
    alt: 'Polished travertine display tray with warm honey banding',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=520,h=650,fit=crop/iDgzyGvHyDWkHZUO/img-20250821-wa0014-AVLxz13onqfqLJL4.jpg',
    sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
  },
  {
    n: '03',
    text: 'Tables, benches, and custom furniture',
    alt: 'Bespoke live-edge travertine dining table with matching wall-mounted slab',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=520,fit=crop/iDgzyGvHyDWkHZUO/20240813_211426-AMqDxlG131feQne6.jpg',
    sizes: '100vw',
  },
  {
    n: '04',
    text: 'Bespoke interior and exterior architectural pieces',
    alt: 'Carved onyx rotunda architectural artifact with decorative vase',
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=520,h=650,fit=crop/iDgzyGvHyDWkHZUO/img_20250914_154057_416-572419341-Yan0Mq9MMDUnDEQj.jpg',
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
          <p>
            A reduction in material waste. A saving on procurement. A more sustainable, more coherent
            approach to natural stone in architecture.
          </p>
          <Link href="/contact" className="btn btn-light" style={{ borderColor: 'var(--line)', color: 'var(--umber)' }}>
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
