import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { ComingSoonHero } from '@/components/pages/coming_soon/hero';

export default function ComingSoon() {
  return (
    <>
      <CommonLayout>
        <ComingSoonHero />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
