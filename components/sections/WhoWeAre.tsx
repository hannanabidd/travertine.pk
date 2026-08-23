import Image from 'next/image';

const RANGE_SRC =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=1000,fit=crop/iDgzyGvHyDWkHZUO/20240818_160725-YBgj8aloLoivBRZ0.jpg';

const FACTS = [
  {
    label: 'Quarry Owner',
    detail: 'Direct extraction & control',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M4 26L17 4l13 22H4z" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Sister Concern',
    detail: 'Of Cappah International',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="12" r="6" stroke="#b08347" strokeWidth="1.3" />
        <path d="M6 30c1.5-6.5 6-10 11-10s9.5 3.5 11 10" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Global Standards',
    detail: 'Exhibition-tested experience',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="15.5" stroke="#b08347" strokeWidth="1.2" />
        <path d="M17 1.5c4 4.2 6 9.6 6 15.5s-2 11.3-6 15.5c-4-4.2-6-9.6-6-15.5s2-11.3 6-15.5z" stroke="#b08347" strokeWidth="1.2" />
        <path d="M2.5 17h29" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
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
