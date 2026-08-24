import Image from 'next/image';
import Link from 'next/link';

const CLOSING_SRC =
  '/images/raw-stone-11.jpg';

export default function Closing() {
  return (
    <section className="closing">
      <Image
        className="closing-photo"
        src={CLOSING_SRC}
        alt="Raw travertine quarry excavation face in Loralai, Balochistan"
        fill
        sizes="100vw"
      />
      <div className="closing-scrim" />
      <svg className="veins" viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice">
        <path
          d="M-50,250 C300,200 500,320 780,250 C1050,190 1200,290 1450,230"
          stroke="#b08347"
          strokeWidth="1.2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M-50,320 C320,360 520,270 800,330 C1050,380 1200,300 1450,350"
          stroke="#c9af8a"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
      </svg>
      <div className="wrap closing-inner">
        <h2 className="reveal">
          Crafted by Nature.
          <br />
          <em>Delivered with Precision.</em>
        </h2>
        <p className="reveal">
          From the mineral-rich springs of Loralai to architectural landmarks around the world, our
          travertine carries a story of purity, continuity, and timeless beauty.
        </p>
        <div className="signature reveal">travertine.pk: Pakistan&apos;s Signature Stone.</div>
        <div className="oneone reveal">One stone. One vision. One building.</div>
        <div className="closing-ctas reveal">
          <Link href="/contact" className="btn btn-primary">
            Request a Sample
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <Link href="/contact" className="btn btn-light">
            Contact Our Export Team
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
