const APPROACHES = [
  {
    idx: 'Approach 01',
    title: 'Optimised Block Cutting',
    body: 'Every block is assessed and cut to maximise usable yield, reducing waste from the point of extraction.',
  },
  {
    idx: 'Approach 02',
    title: 'Offcut Reuse',
    body: 'Material offcuts from slab production are retained and repurposed for our accessories and furniture range: nothing of value leaves the facility as waste.',
  },
  {
    idx: 'Approach 03',
    title: 'Reduced Extraction Impact',
    body: 'By integrating block supply, slabs, and accessories under one production cycle, we reduce the need for additional quarrying to fulfil secondary orders.',
  },
  {
    idx: 'Approach 04',
    title: 'Lower Carbon Footprint',
    body: 'Consolidated production and export logistics mean fewer shipments, smaller carbon exposure per project delivered.',
  },
];

export default function Sustainability() {
  return (
    <section className="dark sec-pad">
      <div className="wrap">
        <div className="eyebrow reveal">Responsible Sourcing</div>
        <div className="kicker-row reveal">
          <h2>
            Stone That
            <br />
            Respects the Earth.
          </h2>
          <p className="desc">
            Natural stone is among the most enduring materials in construction. At travertine.pk, we
            take that responsibility seriously, ensuring our quarrying and fabrication practices
            minimise waste at every stage.
          </p>
        </div>
        <div className="sus-grid reveal">
          {APPROACHES.map((a) => (
            <div className="sus-card" key={a.idx}>
              <div className="idx">{a.idx}</div>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
        <p className="sus-note reveal">
          &quot;travertine.pk is committed to responsible quarrying and environmentally conscious
          craftsmanship, because the best stone should leave the earth better than it found it.&quot;
        </p>
      </div>
    </section>
  );
}
