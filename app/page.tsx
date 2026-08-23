import Hero from '@/components/sections/Hero';
import BrandIntro from '@/components/sections/BrandIntro';
import Blocks from '@/components/sections/Blocks';
import Accessories from '@/components/sections/Accessories';
import Sustainability from '@/components/sections/Sustainability';
import Stats from '@/components/sections/Stats';
import WhyUs from '@/components/sections/WhyUs';
import Gallery from '@/components/sections/Gallery';
import Process from '@/components/sections/Process';
import Closing from '@/components/sections/Closing';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <div className="wrap">
        <div className="divider" />
      </div>
      <Blocks />
      <Stats />
      <Accessories />
      <Sustainability />
      <WhyUs />
      <Gallery />
      <Process />
      <Closing />
    </>
  );
}
