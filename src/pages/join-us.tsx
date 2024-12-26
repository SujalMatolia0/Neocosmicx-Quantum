import { CommonFooter } from '@/components/footer/common';
import { CommonSectorCard } from '@/components/indie/common_sector_card';
import { CommonSectorHero } from '@/components/indie/common_sector_hero';
import { CommonSectorSection } from '@/components/indie/common_sector_section';
import { CommonLayout } from '@/components/layout/common';
import { JoinUsSection1 } from '@/components/pages/join_us/section1';
import { JoinUsSection2 } from '@/components/pages/join_us/section2';
import { JoinUsSection3 } from '@/components/pages/join_us/section3';
import { JoinUsSection4 } from '@/components/pages/join_us/section4';
import { QMLSection1 } from '@/components/pages/q-ml/section1';

export default function JoinUs() {
  return (
    <>
      <CommonLayout>
        <JoinUsSection1 />
        <JoinUsSection2 />
        <JoinUsSection3 />
        <JoinUsSection4 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
