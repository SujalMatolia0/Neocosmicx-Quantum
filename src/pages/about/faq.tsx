import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { FaqHero } from '@/components/pages/about/faq/hero';
import { FaqSection1 } from '@/components/pages/about/faq/section1';

export default function Faq() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <FaqHero />
        <FaqSection1 />
      </CommonLayout>
    </>
  );
}
