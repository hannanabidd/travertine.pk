import Image from 'next/image';
import { LuCrop, LuRecycle, LuLeaf, LuFootprints } from 'react-icons/lu';

const PHOTO_SRC = '/images/raw-stone-17.png';

const APPROACHES = [
  {
    num: '01',
    title: 'Optimised Block Cutting',
    body: 'Every block is assessed and cut to maximise usable yield, reducing waste from the point of extraction.',
    icon: <LuCrop />,
  },
  {
    num: '02',
    title: 'Offcut Reuse',
    body: 'Material offcuts from slab production are retained and repurposed for our accessories and furniture range: nothing of value leaves the facility as waste.',
    icon: <LuRecycle />,
  },
  {
    num: '03',
    title: 'Reduced Extraction Impact',
    body: 'By integrating block supply, slabs, and accessories under one production cycle, we reduce the need for additional quarrying to fulfil secondary orders.',
    icon: <LuLeaf />,
  },
  {
    num: '04',
    title: 'Lower Carbon Footprint',
    body: 'Consolidated production and export logistics mean fewer shipments, smaller carbon exposure per project delivered.',
    icon: <LuFootprints />,
  },
];

export default function Sustainability() {
  return (
    <section className="sec-pad sus-band">
      <Image
        className="sus-photo"
        src={PHOTO_SRC}
        alt="Quarry wall meeting a still reflective pool, banded travertine strata visible above the waterline"
        fill
        sizes="100vw"
      />
      <div className="sus-scrim" />
      <div className="wrap">
        <div className="eyebrow reveal">Responsible Sourcing</div>
        <h2 className="reveal">
          Stone That
          <br />
          Respects the Earth.
        </h2>
        <p className="sus-lead reveal">
          Natural stone is among the most enduring materials in construction. At travertine.pk, we
          take that responsibility seriously, ensuring our quarrying and fabrication practices
          minimise waste at every stage.
        </p>

        <div className="sus-list reveal">
          {APPROACHES.map((a) => (
            <div className="sus-row" key={a.num}>
              <span className="sus-num">{a.num}</span>
              <div className="sus-row-icon">{a.icon}</div>
              <div className="sus-row-body">
                <h4>{a.title}</h4>
                <p>{a.body}</p>
              </div>
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
