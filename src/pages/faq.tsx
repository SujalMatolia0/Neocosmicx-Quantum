import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { FaqHero } from '@/components/pages/faq/hero';
import { FaqSection1 } from '@/components/pages/faq/section1';
import { FaqSection2 } from '@/components/pages/faq/section2';

export default function Faq() {
  return (
    <>
      <CommonLayout>
        <FaqHero />
        <FaqSection1 />
        <FaqSection2 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
