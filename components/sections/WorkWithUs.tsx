import { LuMountain, LuAward, LuRuler, LuHandshake } from 'react-icons/lu';

const ADVANTAGES = [
  {
    title: 'Direct Quarry Ownership',
    body: 'No middlemen. We own the source, which translates directly into better pricing and tighter quality control for our buyers.',
    icon: <LuMountain />,
  },
  {
    title: 'International Credibility',
    body: "Backed by Cappah International's established reputation on the global exhibition circuit.",
    icon: <LuAward />,
  },
  {
    title: 'Custom Specifications',
    body: "Whether standard dimensions or bespoke cuts, we work to your project's exact requirements.",
    icon: <LuRuler />,
  },
  {
    title: 'Reliable Export Partner',
    body: 'Well-established logistics and export experience mean your consignment moves smoothly from Pakistan to your destination.',
    icon: <LuHandshake />,
  },
];

export default function WorkWithUs() {
  return (
    <section className="sec-pad" id="why-work-with-us">
      <div className="wrap">
        <div className="eyebrow reveal">Why Work With Us</div>
        <div className="kicker-row reveal">
          <h2>The travertine.pk Advantage.</h2>
        </div>
        <div className="grid-4 reveal">
          {ADVANTAGES.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="mark">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
