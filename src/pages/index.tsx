import { CommonLayout } from '@/components/layout/common';
import { LandingHero } from '@/components/pages/landing/hero';
import { LandingSection1 } from '@/components/pages/landing/section1';
import { LandingSection3 } from '@/components/pages/landing/section3';

export default function Page() {
  return (
    <>
      <CommonLayout>
        <LandingHero />
        <LandingSection1 />
        <LandingSection3 />
      </CommonLayout>
    </>
  );
}
