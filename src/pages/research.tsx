import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { CoursesHero } from '@/components/pages/courses/hero';
import { ResearchHero } from '@/components/pages/research/hero';
import { ResearchSection1 } from '@/components/pages/research/section1';
import { ResearchSection2 } from '@/components/pages/research/section2';

export default function Courses() {
  return (
    <>
      <CommonLayout>
        <ResearchHero />
        <ResearchSection1 />
        <ResearchSection2 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
