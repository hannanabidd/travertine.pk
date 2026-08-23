import Link from 'next/link';

const CONTACTS = [
  {
    label: 'Email',
    value: 'info@travertine.pk',
    href: 'mailto:info@travertine.pk',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="4.5" width="19" height="15" rx="1" stroke="#c9af8a" strokeWidth="1.3" />
        <path d="M3 5.5l9 7 9-7" stroke="#c9af8a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+92 332 865 8650',
    href: 'tel:+923328658650',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4.5 3.5h3.7l1.6 4.4-2 1.8a13 13 0 006.5 6.5l1.8-2 4.4 1.6v3.7c0 1-.8 1.8-1.8 1.7A17.5 17.5 0 013 5.3c-.1-1 .7-1.8 1.5-1.8z"
          stroke="#c9af8a"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Web',
    value: 'www.travertine.pk',
    href: 'https://www.travertine.pk',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9.5" stroke="#c9af8a" strokeWidth="1.3" />
        <path d="M2.5 12h19M12 2.5c2.8 2.9 4.2 6.4 4.2 9.5S14.8 18.6 12 21.5C9.2 18.6 7.8 15.1 7.8 12S9.2 5.4 12 2.5z" stroke="#c9af8a" strokeWidth="1.3" />
      </svg>
    ),
  },
];

export default function GetInTouch() {
  return (
    <section className="contact-band" id="contact">
      <div className="wrap">
        <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>
          Get in Touch
        </div>
        <h2 className="reveal">Let&apos;s Start a Conversation.</h2>
        <p className="lead reveal">
          We welcome enquiries from importers, distributors, architects, and project developers
          worldwide.
        </p>
        <div className="contact-grid reveal">
          {CONTACTS.map((c) => (
            <div className="contact-item" key={c.label}>
              {c.icon}
              <span className="label">{c.label}</span>
              <a href={c.href}>{c.value}</a>
            </div>
          ))}
        </div>
        <div className="ctas reveal">
          <Link href="/contact" className="btn btn-primary">
            Contact Our Team
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
          <a href="mailto:info@travertine.pk" className="btn btn-light">
            Email Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
