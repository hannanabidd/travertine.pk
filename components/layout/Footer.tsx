import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa6';

const LOGO_SRC = '/images/Logo_White.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <Image className="foot-logo-img" src={LOGO_SRC} alt="travertine.pk" width={1566} height={1445} />
            </div>
            <p>
              Quarry-to-export travertine specialists based in Loralai, Balochistan, with fabrication in
              Lahore, Pakistan. Raw blocks, cut slabs, and bespoke stone furnishings for architecture
              worldwide.
            </p>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/accessories">Accessories</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Stone</h5>
            <ul>
              <li><Link href="/#blocks">Blocks</Link></li>
              <li><Link href="/accessories">Accessories</Link></li>
              <li><Link href="/#process">Process</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@travertine.pk">info@travertine.pk</a></li>
              <li><a href="tel:+923328658650">+92&nbsp;332&nbsp;865&nbsp;8650</a></li>
              <li><Link href="/contact">Contact page →</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 travertine.pk. All rights reserved.</span>
          <div className="foot-socials">
            <a href="https://wa.me/+923328658650" aria-label="WhatsApp">
              <FaWhatsapp size={16} />
            </a>
            <a href="https://www.facebook.com/share/1FHE4e1YMg/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={16} />
            </a>
            <a href="https://www.instagram.com/travertinepk" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="foot-mark" aria-hidden="true">travertine.pk</div>
    </footer>
  );
}
