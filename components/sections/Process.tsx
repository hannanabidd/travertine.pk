const STEPS = [
  {
    num: '01',
    title: 'Enquiry',
    body: 'Submit your specification: stone type, dimensions, finish, quantity, and destination port. We respond within one business day.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <rect x="4" y="8" width="26" height="18" rx="1" stroke="#b08347" strokeWidth="1.3" />
        <path d="M4 9.5L17 19l13-9.5" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Sample Review',
    body: 'Receive physical samples of your selected stone. Approve the material before any production begins.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <rect x="5" y="6" width="13" height="17" rx="1" stroke="#b08347" strokeWidth="1.3" />
        <circle cx="23" cy="21" r="6" stroke="#b08347" strokeWidth="1.3" />
        <path d="M27.2 25.2L31 29" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Order Confirmation',
    body: 'Agree pricing, lead time, and shipping terms. We issue a proforma invoice and commence processing upon payment confirmation.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M9 4h12l6 6v20H9z" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M21 4v6h6" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M13.5 20.5l3.5 3.5 7.5-8" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Fabrication & Quality Check',
    body: 'Your order is cut, finished, and inspected in our facility. Pre-shipment inspection reports are available on request.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path
          d="M21.5 7.5a7 7 0 00-9.7 8.9L5 23.2l3.8 3.8 6.8-6.8a7 7 0 008.9-9.7l-4.3 4.3-3.8-3.8 4.3-4.3z"
          stroke="#b08347"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Shipment & Documentation',
    body: 'Your consignment is packed, containerised, and loaded. Full shipping documents are provided within 48 hours of vessel departure.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M5 11.5L17 5l12 6.5-12 6.5-12-6.5z" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M5 11.5v11L17 29l12-6.5v-11" stroke="#b08347" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M17 18v11" stroke="#b08347" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Ongoing Relationship',
    body: 'We remain your point of contact for re-orders, additional varieties, or new project specifications.',
    icon: (
      <svg viewBox="0 0 34 34" fill="none">
        <path d="M27 13.5a10 10 0 10-1.8 11.3" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M27 6.5v7h-7" stroke="#b08347" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="dark sec-pad" id="process">
      <div className="wrap">
        <div className="eyebrow reveal">How We Work</div>
        <div className="kicker-row reveal">
          <h2>
            From Enquiry to
            <br />
            Delivery, Made Simple.
          </h2>
        </div>
        <div className="process-track reveal">
          {STEPS.map((step) => (
            <div className="proc-step reveal" key={step.num}>
              <div className="proc-icon">{step.icon}</div>
              <div className="proc-body">
                <span className="proc-num">{step.num}</span>
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
