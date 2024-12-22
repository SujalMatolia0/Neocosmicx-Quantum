import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { LandingSection4 } from '@/components/pages/landing/section4';
import { LandingSection5 } from '@/components/pages/landing/section5';
import { PricingHero } from '@/components/pages/pricing/hero';
import { PricingSection1 } from '@/components/pages/pricing/section1';
import { PricingSection2 } from '@/components/pages/pricing/section2';
import { PricingSection3 } from '@/components/pages/pricing/section3';

export default function Pricing() {
  return (
    <>
      <CommonLayout>
        <PricingHero />
        <PricingSection1 />
        <PricingSection2 />
        <PricingSection3 />
        <LandingSection4 />
        <LandingSection5 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
