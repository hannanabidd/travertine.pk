import Link from 'next/link';

export default function Leadership() {
  return (
    <section className="sec-pad" id="leadership">
      <div className="wrap">
        <div className="eyebrow reveal">Leadership</div>
        <div className="kicker-row reveal">
          <h2>Leading Our Global Expansion.</h2>
        </div>
        <div className="leader-card reveal">
          <div className="leader-avatar" aria-hidden="true">
            MI
          </div>
          <div className="leader-info">
            <div className="role">Director of Sales</div>
            <h4>Muhammad Ishaque</h4>
            <p>
              The global expansion initiative is led by Muhammad Ishaque, Director of Sales at
              travertine.pk. With a focus on building meaningful international relationships and
              positioning Pakistani travertine competitively in world markets, Muhammad brings
              commercial clarity and strategic vision to every engagement.
            </p>
            <Link href="/contact" className="leader-link">
              Get in touch with our sales team
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
