import { LuLayers, LuTruck } from 'react-icons/lu';

const FEATURES = [
  {
    title: 'Matching Vein & Pattern',
    body: 'Accessories and cladding are cut from the same stone, consistent throughout your project.',
    icon: <LuLayers />,
  },
  {
    title: 'Reduced Freight & Duty',
    body: 'Smaller, lighter shipments mean real savings.',
    icon: <LuTruck />,
  },
];

export default function AccessoriesOffering() {
  return (
    <section className="sec-pad">
      <div className="wrap">
        <div className="eyebrow reveal">Our Offering</div>
        <h2 className="reveal" style={{ fontSize: 'clamp(30px, 4vw, 46px)', maxWidth: 820 }}>
          You Pay for the Stone You Use, Not the Block It Came From.
        </h2>
        <p className="section-lead reveal" style={{ marginTop: 32 }}>
          We supply both raw blocks and finished accessories direct from source: basins, table
          tops, tables, plinths, and decorative items. Buyers seeking a consistent theme have
          traditionally had to order full blocks, absorbing stone, freight, and duty costs far
          beyond what their project demands.
        </p>
        <p className="section-lead reveal">
          We offer something different: order by piece, not by block. A single vanity, a table
          top, a base, supplied on its own. And when you add up the cost of a block purchase
          (cutting, fabrication, CNC, and labour), it often runs many times what we can offer you
          at source. Ask for our price and judge for yourself.
        </p>

        <div className="acc-features reveal">
          {FEATURES.map((f) => (
            <div className="why-card" key={f.title}>
              <div className="mark">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>

        <p className="acc-quote reveal">
          &quot;Give customers the flexibility to order what they actually need, at a fair price,
          without unnecessary waste.&quot;
        </p>
      </div>
    </section>
  );
}
