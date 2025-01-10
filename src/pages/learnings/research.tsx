import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { ResearchHero } from '@/components/pages/learning/research/hero';
import { ResearchSection1 } from '@/components/pages/learning/research/section1';
import { ResearchSection2 } from '@/components/pages/learning/research/section2';
export default function Courses() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <ResearchHero />
        <ResearchSection1 />
        <ResearchSection2 />
       
      </CommonLayout>
    </>
  );
}
