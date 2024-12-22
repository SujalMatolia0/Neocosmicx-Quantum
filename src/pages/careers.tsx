import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { CareersHero } from '@/components/pages/careers/hero';

export default function Careers() {
  return (
    <>
      <CommonLayout>
        <CareersHero />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
