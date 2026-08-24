import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntroBackground from '@/components/layout/PageIntroBackground';
import GalleryShowcase from '@/components/sections/GalleryShowcase';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'From the Loralai quarry to finished interiors and hand-finished onyx artifacts: browse travertine.pk in raw stone, architectural application, and bespoke fixtures.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-intro">
        <PageIntroBackground />
        <div className="wrap">
          <div className="breadcrumb reveal">
            <Link href="/">Home</Link>
            <span>/</span>
            Gallery
          </div>
          <div className="eyebrow reveal">Gallery</div>
          <h1 className="reveal">
            Quarry to Interior.
            <br />
            <em>Every Stage, in Frame.</em>
          </h1>
          <p className="lead reveal">
            Three ways to see the stone: where it comes from, where it ends up, and what it becomes
            in the hands of our craftsmen. Scroll each row to explore, click any image to view it
            larger.
          </p>
        </div>
      </section>

      <GalleryShowcase />

      <section className="sec-pad">
        <div className="wrap">
          <div className="advantage-strip reveal">
            <p>
              Every image here is our own material and our own work. Request physical samples before
              you specify a project.
            </p>
            <Link href="/contact" className="btn btn-light">
              Request a Sample
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
