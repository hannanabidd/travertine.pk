import Image from 'next/image';
import Link from 'next/link';

const LOGO_SRC =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/iDgzyGvHyDWkHZUO/marbelpk-high-resolution-logo-transparent-knqRoZdWBQ7LtnuM.png';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <Image className="foot-logo-img" src={LOGO_SRC} alt="travertine.pk" width={375} height={270} />
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
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Stone</h5>
            <ul>
              <li><Link href="/#blocks">Blocks</Link></li>
              <li><Link href="/#accessories">Accessories</Link></li>
              <li><Link href="/#process">Process</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@travertine.pk">info@travertine.pk</a></li>
              <li><a href="tel:+923004107104">+92&nbsp;300&nbsp;4107104</a></li>
              <li><Link href="/contact">Contact page →</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 travertine.pk. All rights reserved.</span>
          <div className="foot-socials">
            <a href="https://wa.me/+923004107104">WhatsApp</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
          </div>
        </div>
      </div>
      <div className="foot-mark" aria-hidden="true">travertine.pk</div>
    </footer>
  );
}
