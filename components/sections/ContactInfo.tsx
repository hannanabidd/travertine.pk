const ROWS = [
  {
    label: 'Email',
    value: 'info@travertine.pk',
    href: 'mailto:info@travertine.pk',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="4.5" width="19" height="15" rx="1" stroke="currentColor" strokeWidth="1.3" />
        <path d="M3 5.5l9 7 9-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+92 332 865 8650',
    href: 'https://wa.me/+923328658650',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1012 3.5z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M8.7 8.3c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .5.4.2.4.6 1.5.7 1.6.1.1.1.3 0 .5-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2 1.2 1 2 1.3 2.3 1.4.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.6.8c.2.1.3.1.4.3.1.2.1.9-.2 1.4-.3.6-1.5 1.2-2.1 1.2-.6.1-1.1.1-3.6-1.1-3-1.5-4.7-4.7-4.9-4.9-.1-.2-1-1.3-1-2.5 0-1.2.6-1.8.8-2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div className="contact-info-card">
      <h3>Reach Our Export Team</h3>
      <p className="form-note" style={{ marginTop: 0 }}>
        We respond to every enquiry within one business day.
      </p>

      {ROWS.map((row) => (
        <div className="contact-info-row" key={row.label}>
          {row.icon}
          <div>
            <div className="label">{row.label}</div>
            <a href={row.href}>{row.value}</a>
          </div>
        </div>
      ))}

      <div className="contact-info-row">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21.5s7-6.3 7-11.8A7 7 0 0012 2.5a7 7 0 00-7 7.2c0 5.5 7 11.8 7 11.8z"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9.7" r="2.4" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <div>
          <div className="label">Quarry &amp; Fabrication</div>
          <div className="value">
            Loralai, Balochistan
            <br />
            Lahore, Pakistan
          </div>
        </div>
      </div>

      <div className="contact-socials">
        <a href="https://wa.me/+923328658650" aria-label="WhatsApp">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3.5a8.5 8.5 0 00-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1012 3.5z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 8.5h2.5V5H15c-2 0-3.5 1.6-3.5 3.5v2H9.5V14H11.5v8.5H15V14h2l.5-3.5H15v-2z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="4.5" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  );
}
