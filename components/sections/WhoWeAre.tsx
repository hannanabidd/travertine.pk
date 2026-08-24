import Image from 'next/image';
import { LuMountain, LuUsers, LuGlobe } from 'react-icons/lu';

const RANGE_SRC =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=1000,fit=crop/iDgzyGvHyDWkHZUO/20240818_160725-YBgj8aloLoivBRZ0.jpg';

const FACTS = [
  { label: 'Quarry Owner', detail: 'Direct extraction & control', icon: <LuMountain /> },
  { label: 'Sister Concern', detail: 'Of Cappah International', icon: <LuUsers /> },
  { label: 'Global Standards', detail: 'Exhibition-tested experience', icon: <LuGlobe /> },
];

export default function WhoWeAre() {
  return (
    <section className="sec-pad" id="who-we-are">
      <div className="wrap intro">
        <div className="reveal">
          <div className="quarry-card">
            <Image
              src={RANGE_SRC}
              alt="Mountain range in Loralai, Balochistan, the source of our travertine"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <div className="quarry-tag">
              <strong>Loralai, Balochistan</strong>
              Our Quarry Source
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="eyebrow">Who We Are</div>
          <h2>
            Quarry Ownership.
            <br />
            Commercial Sophistication.
          </h2>
          <p>
            travertine.pk is a Pakistan-based quarry owner and natural stone exporter with deep roots
            in the stone industry.
          </p>
          <p>
            As a sister concern of Cappah International, a well-established company with proven
            experience on the international exhibition stage, we bring both quarry expertise and
            commercial sophistication to the global stone market.
          </p>
          <p className="intro-quote">
            Our business is built on direct quarry ownership, which means we control every stage of
            the supply chain: extraction, selection, processing, and export.
          </p>
          <div className="about-facts">
            {FACTS.map((fact) => (
              <div className="fact" key={fact.label}>
                <div className="fact-icon">{fact.icon}</div>
                <strong>{fact.label}</strong>
                <span>{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
