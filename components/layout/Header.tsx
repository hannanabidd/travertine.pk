'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/accessories', label: 'Accessories' },
  // { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const LOGO_SRC = '/images/Logo_White.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header id="siteHeader" className={scrolled ? 'scrolled' : undefined}>
        <div className="wrap">
          <Link href="/" className="logo">
            <Image
              className="logo-img"
              src={LOGO_SRC}
              alt="travertine.pk"
              width={1566}
              height={1445}
              preload
            />
          </Link>
          <nav>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-light nav-cta">
            Request a Sample
          </Link>
          <button
            className={`menu-btn${menuOpen ? ' open' : ''}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-panel${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
          Request a Sample
        </Link>
      </div>
    </>
  );
}
