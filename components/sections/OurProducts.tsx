import Link from 'next/link';

const PRODUCTS = [
  {
    title: 'Slabs',
    body: 'Full-size travertine and marble slabs for facades, flooring, and large-format cladding, cut to consistent thickness and finish.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <rect x="5" y="5" width="24" height="24" stroke="#b08347" strokeWidth="1.2" />
        <path d="M5 13h24M5 21h24" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Tiles',
    body: 'Standard and custom tile formats for interior and exterior surfaces, matched for colour and veining across the full order.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <rect x="4" y="4" width="11" height="11" stroke="#b08347" strokeWidth="1.2" />
        <rect x="19" y="4" width="11" height="11" stroke="#b08347" strokeWidth="1.2" />
        <rect x="4" y="19" width="11" height="11" stroke="#b08347" strokeWidth="1.2" />
        <rect x="19" y="19" width="11" height="11" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Custom-Cut Stone',
    body: "Bespoke dimensions and profiles for architectural and interior applications, cut to your project's exact drawings.",
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M6 6l22 22M28 6L6 28" stroke="#b08347" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="17" cy="17" r="4" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function OurProducts() {
  return (
    <section className="sec-pad" id="products">
      <div className="wrap">
        <div className="eyebrow reveal">Our Products</div>
        <div className="kicker-row reveal">
          <h2>
            Premium Travertine & Marble,
            <br />
            Cut to Your Specification.
          </h2>
          <p className="desc">
            Our travertine is sourced from our own quarries, ensuring that every consignment meets
            rigorous standards of texture, finish, and structural integrity.
          </p>
        </div>
        <div className="why-grid reveal">
          {PRODUCTS.map((product) => (
            <div className="why-card" key={product.title}>
              <div className="mark">{product.icon}</div>
              <h4>{product.title}</h4>
              <p>{product.body}</p>
            </div>
          ))}
        </div>
        <div className="advantage-strip reveal">
          <p>
            We cater to architects, interior designers, contractors, and stone importers across global
            markets, offering both standard and bespoke specifications to meet project-specific
            requirements.
          </p>
          <Link href="/contact" className="btn btn-light">
            Discuss Your Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
