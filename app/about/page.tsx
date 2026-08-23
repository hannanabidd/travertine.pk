import type { Metadata } from 'next';
import AboutIntro from '@/components/sections/AboutIntro';
import WhoWeAre from '@/components/sections/WhoWeAre';
import OurProducts from '@/components/sections/OurProducts';
import Heritage from '@/components/sections/Heritage';
import Leadership from '@/components/sections/Leadership';
import WorkWithUs from '@/components/sections/WorkWithUs';
import GetInTouch from '@/components/sections/GetInTouch';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "travertine.pk is a Pakistan-based quarry owner and natural stone exporter, a sister concern of Cappah International. We control every stage of the supply chain, from extraction to export, delivering premium travertine and marble to architects, designers, and importers worldwide.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <WhoWeAre />
      <div className="wrap">
        <div className="divider" />
      </div>
      <OurProducts />
      <Heritage />
      <Leadership />
      <WorkWithUs />
      <GetInTouch />
    </>
  );
}
