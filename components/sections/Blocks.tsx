import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const BLOCK_SRC = '/images/raw-stone-06.jpg';

const APPLICATIONS = [
  'Exterior façades and monumental cladding',
  'Interior wall cladding and feature surfaces',
  'Flooring, staircases, and threshold details',
  'Luxury residential and commercial developments',
  'Large architectural volumes requiring consistent veining across the full installation',
];

export default function Blocks() {
  return (
    <section className="dark sec-pad" id="blocks">
      <div className="wrap">
        <div className="eyebrow reveal">From the Quarry</div>
        <div className="kicker-row reveal">
          <h2>
            From Quarry to
            <br />
            Global Architecture.
          </h2>
          <p className="desc">
            We supply raw travertine blocks, from smaller selections to blocks exceeding 25 tonnes,
            prepared precisely to order for international markets. Whether your project demands a
            single statement volume or a consistent supply across multiple phases, our extraction and
            processing operations are calibrated to meet the specification.
          </p>
        </div>
        <div className="blocks-grid reveal">
          <div className="blocks-visual">
            <Image
              src={BLOCK_SRC}
              alt="A massive raw travertine block freshly cut at the quarry face, stacked and ready for transport"
              fill
              sizes="(max-width: 1024px) 100vw, 660px"
            />
            <div className="weight-badge">
              <div className="num">25T+</div>
              <div className="lbl">Max Block Weight</div>
            </div>
          </div>
          <div className="blocks-content">
            <h3>Typical Applications</h3>
            <ul className="app-list">
              {APPLICATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="quote-line">
              &quot;Every block carries the same geological identity, ensuring material continuity and
              visual harmony across your entire project.&quot;
            </p>
            <Link href="/contact" className="btn btn-light" style={{ alignSelf: 'flex-start', marginTop: 10 }}>
              Enquire About Block Supply
              <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
