import Image from 'next/image';
import { LuGem, LuCompass, LuMapPin } from 'react-icons/lu';

const QUARRY_SRC =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=800,h=1000,fit=crop/iDgzyGvHyDWkHZUO/20240818_151659-mxB2lWjr5jh2WnnL.jpg';

const FACTS = [
  { label: 'Natural Stone', detail: 'Sourced from Balochistan', icon: <LuGem /> },
  { label: 'Bespoke', detail: 'Residential & Commercial', icon: <LuCompass /> },
  { label: 'Crafted in Lahore', detail: 'Fabrication & Finishing', icon: <LuMapPin /> },
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
