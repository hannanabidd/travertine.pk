import { LuMail, LuFileSearch, LuFileCheck2, LuWrench, LuShip, LuRefreshCw } from 'react-icons/lu';

const STEPS = [
  {
    num: '01',
    title: 'Enquiry',
    body: 'Submit your specification: stone type, dimensions, finish, quantity, and destination port. We respond within one business day.',
    icon: <LuMail />,
  },
  {
    num: '02',
    title: 'Sample Review',
    body: 'Receive physical samples of your selected stone. Approve the material before any production begins.',
    icon: <LuFileSearch />,
  },
  {
    num: '03',
    title: 'Order Confirmation',
    body: 'Agree pricing, lead time, and shipping terms. We issue a proforma invoice and commence processing upon payment confirmation.',
    icon: <LuFileCheck2 />,
  },
  {
    num: '04',
    title: 'Fabrication & Quality Check',
    body: 'Your order is cut, finished, and inspected in our facility. Pre-shipment inspection reports are available on request.',
    icon: <LuWrench />,
  },
  {
    num: '05',
    title: 'Shipment & Documentation',
    body: 'Your consignment is packed, containerised, and loaded. Full shipping documents are provided within 48 hours of vessel departure.',
    icon: <LuShip />,
  },
  {
    num: '06',
    title: 'Ongoing Relationship',
    body: 'We remain your point of contact for re-orders, additional varieties, or new project specifications.',
    icon: <LuRefreshCw />,
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
