import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa6';

const ROWS = [
  { label: 'Email', value: 'info@travertine.pk', href: 'mailto:info@travertine.pk', icon: <LuMail /> },
  { label: 'Phone', value: '+92 332 865 8650', href: 'tel:+923328658650', icon: <LuPhone /> },
  { label: 'WhatsApp', value: '+92 332 865 8650', href: 'https://wa.me/+923328658650', icon: <FaWhatsapp /> },
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
        <LuMapPin />
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
          <FaWhatsapp size={16} />
        </a>
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <FaFacebook size={16} />
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <FaInstagram size={16} />
        </a>
      </div>
    </div>
  );
}
