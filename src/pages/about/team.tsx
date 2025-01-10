import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { TeamHero } from '@/components/pages/about/team/hero';
import { TeamSection1 } from '@/components/pages/about/team/section1';
import { TeamSection2 } from '@/components/pages/about/team/section2';

export default function Team() {
  return (
    <>
      <CommonLayout
        footer={<CommonFooter />}
        header={<CommonHeader />}
        fixedHeader
      >
        <TeamHero />
        <TeamSection1 />
        <TeamSection2 />
      </CommonLayout>
    </>
  );
}
