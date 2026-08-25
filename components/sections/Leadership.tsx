import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const PHOTO_SRC = '/images/raw-stone-03.jpg';

export default function Leadership() {
  return (
    <section className="sec-pad photo-band" id="leadership">
      <Image
        className="photo-band-img"
        src={PHOTO_SRC}
        alt="Quarry wall corner showing banded travertine strata above a reflective water pool"
        fill
        sizes="100vw"
      />
      <div className="photo-band-scrim" />
      <div className="wrap">
        <div className="eyebrow">Leadership</div>
        <div className="kicker-row">
          <h2>Leading Our Global Expansion.</h2>
        </div>
        <div className="leader-card reveal">
          <div className="leader-avatar" aria-hidden="true">
            MI
          </div>
          <div className="leader-info">
            <div className="role">Director of Sales</div>
            <h4>Muhammad Ishaque</h4>
            <p>
              The global expansion initiative is led by Muhammad Ishaque, Director of Sales at
              travertine.pk. With a focus on building meaningful international relationships and
              positioning Pakistani travertine competitively in world markets, Muhammad brings
              commercial clarity and strategic vision to every engagement.
            </p>
            <Link href="/contact" className="leader-link">
              Get in touch with our sales team
              <LuArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
