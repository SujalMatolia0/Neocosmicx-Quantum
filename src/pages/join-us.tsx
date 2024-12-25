import { CommonFooter } from '@/components/footer/common';
import { CommonSectorCard } from '@/components/indie/common_sector_card';
import { CommonSectorHero } from '@/components/indie/common_sector_hero';
import { CommonSectorSection } from '@/components/indie/common_sector_section';
import { CommonLayout } from '@/components/layout/common';
import { JoinUsSection1 } from '@/components/pages/join_us/section1';
import { QMLSection1 } from '@/components/pages/q-ml/section1';

export default function JoinUs() {
  return (
    <>
      <CommonLayout>
        <JoinUsSection1 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
