import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const COVER_SRC = '/images/accessories01.jpg';

export default function AccessoriesCover() {
  return (
    <section className="hero" id="top">
      <Image
        className="hero-photo"
        src={COVER_SRC}
        alt="Two hand-finished travertine bowls resting on a raw quarry block, with cut blocks in the background"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-scrim" />
      <div className="hero-grain" />
      <div className="hero-inner">
        <div className="hero-top">
          <div className="eyebrow reveal">travertine.pk</div>
          <h1 className="reveal">
            The Stone You Need.
            <br />
            <em>Nothing More.</em>
          </h1>
          <p className="hero-sub reveal">
            We supply raw blocks and finished stone furniture and accessories, cut to your exact
            specification and shipped worldwide.
          </p>
          <div className="hero-ctas reveal">
            <Link href="#products" className="btn btn-primary">
              View Featured Pieces
              <LuArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-light">
              Request Pricing
              <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom reveal">
          <div className="trust-line">Stone Furniture Specialists</div>
          <div className="scroll-cue">
            <span className="line" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
