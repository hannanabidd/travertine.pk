import Image from 'next/image';

export default function PageIntroBackground() {
  return (
    <>
      <Image
        className="page-intro-photo"
        src="/images/raw-stone-10.jpg"
        alt="Raw travertine quarry wall in Loralai, Balochistan, showing natural banded stone strata"
        fill
        sizes="100vw"
        preload
      />
      <div className="page-intro-scrim" />
    </>
  );
}
