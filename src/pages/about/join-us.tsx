import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { JoinUsHero } from '@/components/pages/about/join_us/hero';
import { JoinUsSection1 } from '@/components/pages/about/join_us/section1';
import { JoinUsSection2 } from '@/components/pages/about/join_us/section2';
import { JoinUsSection3 } from '@/components/pages/about/join_us/section3';
import { JoinUsSection4 } from '@/components/pages/about/join_us/section4';

export default function JoinUs() {
  return (
    <>
      <CommonLayout>
        <JoinUsHero />
        <JoinUsSection1 />
        <JoinUsSection2 />
        <JoinUsSection3 />
        <JoinUsSection4 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
