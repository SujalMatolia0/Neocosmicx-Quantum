import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { CareersHero } from '@/components/pages/careers/hero';

export default function Careers() {
  return (
    <>
      <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <CareersHero />
        
      </CommonLayout>
    </>
  );
}
