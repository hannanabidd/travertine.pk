const ADVANTAGES = [
  {
    title: 'Direct Quarry Ownership',
    body: 'No middlemen. We own the source, which translates directly into better pricing and tighter quality control for our buyers.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M4 26L17 4l13 22H4z" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'International Credibility',
    body: "Backed by Cappah International's established reputation on the global exhibition circuit.",
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="15.5" stroke="#b08347" strokeWidth="1.2" />
        <path d="M2.5 17h29" stroke="#b08347" strokeWidth="1.2" />
        <path d="M17 1.5c4 4.2 6 9.6 6 15.5s-2 11.3-6 15.5c-4-4.2-6-9.6-6-15.5s2-11.3 6-15.5z" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Custom Specifications',
    body: "Whether standard dimensions or bespoke cuts, we work to your project's exact requirements.",
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M6 6l22 22M28 6L6 28" stroke="#b08347" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="17" cy="17" r="4" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Reliable Export Partner',
    body: 'Well-established logistics and export experience mean your consignment moves smoothly from Pakistan to your destination.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M3 22h28M6 22V13l6-5h10l6 5v9" stroke="#b08347" strokeWidth="1.2" />
        <circle cx="11" cy="26" r="2.4" stroke="#b08347" strokeWidth="1.2" />
        <circle cx="24" cy="26" r="2.4" stroke="#b08347" strokeWidth="1.2" />
      </svg>
    ),
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
