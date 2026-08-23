import Image from 'next/image';

const QUARRY_SRC =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=1000,fit=crop/iDgzyGvHyDWkHZUO/20240818_151659-mxB2lWjr5jh2WnnL.jpg';

const FACTS = [
  {
    label: 'Natural Stone',
    detail: 'Sourced from Balochistan',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M17 4l11 6.5v13L17 30 6 23.5v-13L17 4z" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M17 4v26M6 10.5L17 17l11-6.5" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Bespoke',
    detail: 'Residential & Commercial',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="10" cy="24" r="3" stroke="#b08347" strokeWidth="1.3" />
        <path d="M12.2 21.8L25 9M25 9l-6 1M25 9l-1 6" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Crafted in Lahore',
    detail: 'Fabrication & Finishing',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path
          d="M17 4a8.5 8.5 0 018.5 8.5c0 6.5-8.5 16.5-8.5 16.5S8.5 19 8.5 12.5A8.5 8.5 0 0117 4z"
          stroke="#b08347"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="12.5" r="3" stroke="#b08347" strokeWidth="1.3" />
      </svg>
    ),
  },
];

export default function BrandIntro() {
  return (
    <section className="sec-pad" id="about">
      <div className="wrap intro">
        <div className="reveal">
          <div className="quarry-card">
            <Image
              src={QUARRY_SRC}
              alt="Quarry yard in Loralai with freshly cut travertine blocks awaiting transport, mountains in the background"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <div className="quarry-tag">
              <strong>Loralai Quarry</strong>
              Exclusive Travertine Source
            </div>
          </div>
        </div>
        <div className="reveal">
          <div className="eyebrow">Brand Introduction</div>
          <h2>
            Pakistan&apos;s
            <br />
            Signature Stone.
          </h2>
          <p>
            travertine.pk was founded on a single conviction: that the world&apos;s finest natural
            stone deserves to be delivered to global architecture with the precision and care it
            demands.
          </p>
          <p>
            Our travertine originates from the geological formations around Loralai, Balochistan, a
            region known for producing stone of exceptional purity, consistent veining, and enduring
            structural integrity. We operate from quarry to fabrication to export under one roof,
            giving us complete control over the quality of every consignment we ship.
          </p>
          <p className="intro-quote">
            The result is stone that carries a single geological identity, ensuring harmony across your
            entire project, from the first block to the last tile.
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
