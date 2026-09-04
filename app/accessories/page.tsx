import type { Metadata } from 'next';
import AccessoriesCover from '@/components/sections/AccessoriesCover';
import AccessoriesOffering from '@/components/sections/AccessoriesOffering';
import AccessoriesProducts from '@/components/sections/AccessoriesProducts';

export const metadata: Metadata = {
  title: 'Accessories',
  description:
    'Raw blocks and finished stone furniture and accessories, order by the piece, not the block. Travertine bathtubs, table tops, basins, and bespoke pieces cut to your specification and shipped worldwide.',
  alternates: {
    canonical: '/accessories',
  },
};

export default function AccessoriesPage() {
  return (
    <>
      <AccessoriesCover />
      <AccessoriesOffering />
      <AccessoriesProducts />
    </>
  );
}
