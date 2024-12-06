import { CommonLayout } from '@/components/layout/common';
import { LandingHero } from '@/components/pages/landing/hero';
import { LandingSection1 } from '@/components/pages/landing/section1';
import { LandingSection3 } from '@/components/pages/landing/section3';
import { LandingSection4 } from '@/components/pages/landing/section4';
import { LandingSection5 } from '@/components/pages/landing/section5';
import { LandingSection6 } from '@/components/pages/landing/section6';

export default function Page() {
  return (
    <>
      <CommonLayout>
        <LandingHero />
        <LandingSection1 />
        <LandingSection3 />
        <LandingSection4 />
        <LandingSection5 />
        <LandingSection6 />
      </CommonLayout>
    </>
  );
}
