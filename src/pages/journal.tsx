import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { JournalHero } from '@/components/pages/journal/hero';
import { JournalSection1 } from '@/components/pages/journal/section1';
import { JournalSection2 } from '@/components/pages/journal/section2';

export default function Courses() {
  return (
    <>
      <CommonLayout>
        <JournalHero />
        <JournalSection1 />
        <JournalSection2 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
