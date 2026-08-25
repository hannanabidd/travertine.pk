import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight, LuLayers, LuLayoutGrid, LuScissors } from 'react-icons/lu';

const PHOTO_SRC = '/images/raw-stone-03.jpg';

const PRODUCTS = [
  {
    title: 'Slabs',
    body: 'Full-size travertine and marble slabs for facades, flooring, and large-format cladding, cut to consistent thickness and finish.',
    icon: <LuLayers />,
  },
  {
    title: 'Tiles',
    body: 'Standard and custom tile formats for interior and exterior surfaces, matched for colour and veining across the full order.',
    icon: <LuLayoutGrid />,
  },
  {
    title: 'Custom-Cut Stone',
    body: "Bespoke dimensions and profiles for architectural and interior applications, cut to your project's exact drawings.",
    icon: <LuScissors />,
  },
];

export default function OurProducts() {
  return (
    <section className="sec-pad photo-band" id="products">
      <Image
        className="photo-band-img"
        src={PHOTO_SRC}
        alt="Quarry wall corner showing banded travertine strata above a reflective water pool"
        fill
        sizes="100vw"
      />
      <div className="photo-band-scrim" />
      <div className="wrap">
        <div className="eyebrow">Our Products</div>
        <div className="kicker-row">
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
        <div className="why-grid">
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
            <LuArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
