import { LuBuilding2, LuLandmark, LuCalendarCheck } from 'react-icons/lu';

const MILESTONES = [
  {
    tag: 'Foundation',
    title: 'Cappah International',
    body: 'Our sister concern brings years of proven experience representing Pakistani enterprise on the international exhibition circuit.',
    icon: <LuBuilding2 />,
  },
  {
    tag: 'Multiple Editions',
    title: 'Pulire, Verona → Milan',
    body: 'Cappah International has represented Pakistani enterprise at the Pulire trade exhibition, formerly held in Verona and now in Milan, across multiple editions.',
    icon: <LuLandmark />,
  },
  {
    tag: '22–25 Sep 2026',
    title: 'Marmomac, Verona',
    body: "We are proud to be participating in Marmomac, the world's leading trade fair for natural stone, as the next step in our global growth journey.",
    icon: <LuCalendarCheck />,
  },
];

export default function Heritage() {
  return (
    <section className="dark sec-pad" id="heritage">
      <div className="wrap">
        <div className="eyebrow reveal">Our Heritage</div>
        <div className="kicker-row reveal">
          <h2>
            Built on Proven
            <br />
            Exhibition Experience.
          </h2>
          <p className="desc">
            travertine.pk is backed by the experience and reputation of Cappah International, our
            sister concern, whose track record on the international stage reflects our commitment to
            professional engagement and long-term partnerships.
          </p>
        </div>
        <div className="process-track reveal">
          {MILESTONES.map((step) => (
            <div className="proc-step reveal" key={step.title}>
              <div className="proc-icon">{step.icon}</div>
              <div className="proc-body">
                <span className="proc-num">{step.tag}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
