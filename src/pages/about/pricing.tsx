import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { PricingHero } from '@/components/pages/about/pricing/hero';
import { PricingSection1 } from '@/components/pages/about/pricing/section1';
import { PricingSection2 } from '@/components/pages/about/pricing/section2';
import { PricingSection3 } from '@/components/pages/about/pricing/section3';
import { LandingSection4 } from '@/components/pages/landing/section4';
import { LandingSection5 } from '@/components/pages/landing/section5';
export default function Pricing() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <PricingHero />
        <PricingSection1 />
        <PricingSection2 />
        <PricingSection3 />
        <LandingSection4 />
        <LandingSection5 />
      </CommonLayout>
    </>
  );
}
