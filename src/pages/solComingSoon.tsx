import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { SolutionHeroComingSoon } from '@/components/pages/coming_soon/solutionHero';

export default function SolComingSoon() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <SolutionHeroComingSoon />
      </CommonLayout>
    </>
  );
}
