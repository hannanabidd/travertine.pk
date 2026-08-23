import type { Metadata } from 'next';
import { Fraunces, Poppins } from 'next/font/google';
import './globals.css';
import VeinRail from '@/components/layout/VeinRail';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://travertine.pk'),
  title: {
    default: "travertine.pk: Pakistan's Signature Stone | Export Specialists",
    template: '%s | travertine.pk',
  },
  description:
    'Authentic travertine from Loralai, Balochistan. Raw blocks up to 25T, cut slabs, bespoke stone furniture and accessories, exported to 30+ countries. Request samples at travertine.pk.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${poppins.variable}`}
    >
      <body>
        <VeinRail />
        <Header />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
