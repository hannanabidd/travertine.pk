import Image from 'next/image';
import Link from 'next/link';

const HERO_SRC = '/images/raw-stone-09.jpg';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Image
        className="hero-photo"
        src={HERO_SRC}
        alt="Raw travertine quarry wall in Loralai, Balochistan, showing natural banded stone strata and a reflective water pool"
        fill
        sizes="100vw"
        preload
      />
      <div className="hero-scrim" />
      <div className="hero-grain" />
      <div className="wrap hero-inner">
        <div className="hero-top">
          <div className="eyebrow reveal">Loralai, Balochistan, Pakistan</div>
          <h1 className="reveal">
            Crafted by Nature.
            <br />
            <em>Delivered with Precision.</em>
          </h1>
          <p className="hero-sub reveal">
            From the mineral-rich springs of Loralai to architectural landmarks across the world:
            travertine.pk is Pakistan&apos;s source for authentic travertine stone, supplied in raw
            blocks, cut slabs, and bespoke furnishings for projects of every scale.
          </p>
          <div className="hero-ctas reveal">
            <Link href="/contact" className="btn btn-primary">
              Request a Sample
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            <a href="#about" className="btn btn-light">
              View Our Stone
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-bottom reveal">
          <div className="trust-line">&quot;One stone. One vision. One building.&quot;</div>
          <div className="scroll-cue">
            <span className="line" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
