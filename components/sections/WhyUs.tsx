const CARDS = [
  {
    title: 'Single Geological Source',
    body: 'All our travertine originates from Loralai, Balochistan. You receive stone with a consistent identity, not aggregated from multiple quarries.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="15.5" stroke="#b08347" strokeWidth="1.2" />
        <circle cx="17" cy="17" r="4" fill="#b08347" />
      </svg>
    ),
  },
  {
    title: 'Quarry-to-Export Control',
    body: 'We manage extraction, cutting, finishing, and documentation under one operation. No intermediaries. No quality surprises.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M4 26L17 4l13 22H4z" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Block, Slab, or Bespoke',
    body: 'Whether you need a 25-tonne raw block or a custom-fabricated stone table, we work across the full spectrum of natural stone supply.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <rect x="5" y="5" width="24" height="24" stroke="#b08347" strokeWidth="1.2" />
        <path d="M5 17h24" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Material Continuity Service',
    body: 'Our accessories and furniture programme allows architects and designers to specify the same stone across every surface of a project.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="15.5" stroke="#b08347" strokeWidth="1.2" />
        <path d="M10 17h14M17 10v14" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Export Documentation Expertise',
    body: 'All documentation (country-of-origin certificates, packing lists, L/C compliance, and phytosanitary certification) is handled in-house.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M8 5h18v24H8z" stroke="#b08347" strokeWidth="1.2" />
        <path d="M12 12h10M12 17h10M12 22h6" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Flexible Shipping Terms',
    body: 'We ship on FOB Karachi, CIF, and DAP terms. Full container and LCL groupage options are available for smaller consignments.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M3 22h28M6 22V13l6-5h10l6 5v9" stroke="#b08347" strokeWidth="1.2" />
        <circle cx="11" cy="26" r="2.4" stroke="#b08347" strokeWidth="1.2" />
        <circle cx="24" cy="26" r="2.4" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="sec-pad">
      <div className="wrap">
        <div className="eyebrow reveal">Why travertine.pk</div>
        <div className="kicker-row reveal">
          <h2>What Sets Us Apart.</h2>
        </div>
        <div className="why-grid reveal">
          {CARDS.map((card) => (
            <div className="why-card" key={card.title}>
              <div className="mark">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
