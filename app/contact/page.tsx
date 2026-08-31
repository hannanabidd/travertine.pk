import type { Metadata } from 'next';
import Link from 'next/link';
import { LuCircleCheck } from 'react-icons/lu';
import PageIntroBackground from '@/components/layout/PageIntroBackground';
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a travertine or marble sample, get a bulk export quote, or reach our team directly. travertine.pk responds to every enquiry within one business day.',
  alternates: {
    canonical: '/contact',
  },
};

const CHECKLIST = [
  'Stone type: travertine, marble, or both',
  'Dimensions, or quantity in blocks/slabs/tonnes',
  'Finish: polished, honed, brushed, or tumbled',
  'Destination port and shipping terms (FOB, CIF, DAP)',
  'Timeline and any project delivery deadlines',
];

export default function ContactPage() {
  return (
    <>
      <section className="page-intro">
        <PageIntroBackground />
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span>/</span>
            Contact
          </div>
          <div className="eyebrow reveal">Contact</div>
          <h1 className="reveal">
            Let&apos;s Start a
            <br />
            <em>Conversation.</em>
          </h1>
          <p className="lead reveal">
            Request a sample, ask about bulk export, or get in touch about a project. We welcome
            enquiries from architects, contractors, distributors, and importers worldwide.
          </p>
        </div>
      </section>

      <section className="sec-pad">
        <div className="wrap">
          <div className="contact-layout">
            <div className="reveal">
              <div className="eyebrow">Send an Enquiry</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 38px)', marginBottom: 28 }}>
                Tell Us About Your Project.
              </h2>
              <ContactForm />
            </div>
            <div className="reveal">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="divider reveal" style={{ marginBottom: 64 }} />
          <div className="eyebrow reveal">Before You Write In</div>
          <div className="kicker-row reveal">
            <h2>What to Include.</h2>
            <p className="desc">
              The more detail you give us up front, the faster we can quote and confirm availability.
            </p>
          </div>
          <ul className="check-list reveal">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <LuCircleCheck />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </>
  );
}
