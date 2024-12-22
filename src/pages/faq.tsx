import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { FaqHero } from '@/components/pages/faq/hero';

export default function Faq() {
  return (
    <>
      <CommonLayout>
        <FaqHero />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
