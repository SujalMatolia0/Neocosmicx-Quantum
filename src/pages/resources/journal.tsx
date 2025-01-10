import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { JournalHero } from '@/components/pages/resources/journal/hero';
import { JournalSection1 } from '@/components/pages/resources/journal/section1';
import { JournalSection2 } from '@/components/pages/resources/journal/section2';

export default function Courses() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <JournalHero />
        <JournalSection1 />
        <JournalSection2 />
       
      </CommonLayout>
    </>
  );
}
