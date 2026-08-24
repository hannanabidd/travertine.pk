import { LuTarget, LuMountain, LuLayers, LuBlend, LuFileText, LuTruck } from 'react-icons/lu';

const CARDS = [
  {
    title: 'Single Geological Source',
    body: 'All our travertine originates from Loralai, Balochistan. You receive stone with a consistent identity, not aggregated from multiple quarries.',
    icon: <LuTarget />,
  },
  {
    title: 'Quarry-to-Export Control',
    body: 'We manage extraction, cutting, finishing, and documentation under one operation. No intermediaries. No quality surprises.',
    icon: <LuMountain />,
  },
  {
    title: 'Block, Slab, or Bespoke',
    body: 'Whether you need a 25-tonne raw block or a custom-fabricated stone table, we work across the full spectrum of natural stone supply.',
    icon: <LuLayers />,
  },
  {
    title: 'Material Continuity Service',
    body: 'Our accessories and furniture programme allows architects and designers to specify the same stone across every surface of a project.',
    icon: <LuBlend />,
  },
  {
    title: 'Export Documentation Expertise',
    body: 'All documentation (country-of-origin certificates, packing lists, L/C compliance, and phytosanitary certification) is handled in-house.',
    icon: <LuFileText />,
  },
  {
    title: 'Flexible Shipping Terms',
    body: 'We ship on FOB Karachi, CIF, and DAP terms. Full container and LCL groupage options are available for smaller consignments.',
    icon: <LuTruck />,
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
