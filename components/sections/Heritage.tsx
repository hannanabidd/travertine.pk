const MILESTONES = [
  {
    tag: 'Foundation',
    title: 'Cappah International',
    body: 'Our sister concern brings years of proven experience representing Pakistani enterprise on the international exhibition circuit.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M9 4h16v26H9z" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M13 10h2M19 10h2M13 16h2M19 16h2M13 22h2M19 22h2" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'Multiple Editions',
    title: 'Pulire, Verona → Milan',
    body: 'Cappah International has represented Pakistani enterprise at the Pulire trade exhibition, formerly held in Verona and now in Milan, across multiple editions.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M4 29V13l13-9 13 9v16" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M4 29h26M13 29V18h8v11" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: '22–25 Sep 2026',
    title: 'Marmomac, Verona',
    body: "We are proud to be participating in Marmomac, the world's leading trade fair for natural stone, as the next step in our global growth journey.",
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <rect x="4" y="6" width="26" height="24" rx="1" stroke="#b08347" strokeWidth="1.3" />
        <path d="M4 13h26M10 3v6M24 3v6" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M11 20l4 4 8-8" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
