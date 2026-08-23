import Link from 'next/link';

export default function AboutIntro() {
  return (
    <section className="page-intro">
      <div className="wrap">
        <div className="breadcrumb reveal">
          <Link href="/">Home</Link>
          <span>/</span>
          About
        </div>
        <div className="eyebrow reveal">About travertine.pk</div>
        <h1 className="reveal">
          Natural Stone. Global Reach.
          <br />
          <em>Quarry to Continent.</em>
        </h1>
        <p className="lead reveal">
          travertine.pk is a Pakistan-based quarry owner and natural stone exporter, supplying
          premium travertine and marble from our own quarries to architects, designers, contractors,
          and importers worldwide.
        </p>
      </div>
    </section>
  );
}
