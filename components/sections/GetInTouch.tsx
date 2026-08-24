import Link from 'next/link';
import { LuArrowRight, LuMail, LuPhone, LuGlobe } from 'react-icons/lu';

const CONTACTS = [
  { label: 'Email', value: 'info@travertine.pk', href: 'mailto:info@travertine.pk', icon: <LuMail /> },
  { label: 'Phone', value: '+92 332 865 8650', href: 'tel:+923328658650', icon: <LuPhone /> },
  { label: 'Web', value: 'www.travertine.pk', href: 'https://www.travertine.pk', icon: <LuGlobe /> },
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
            <LuArrowRight size={16} />
          </Link>
          <a href="mailto:info@travertine.pk" className="btn btn-light">
            Email Us
            <LuArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
