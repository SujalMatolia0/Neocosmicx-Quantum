import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { CoursesHero } from '@/components/pages/learning/courses/hero';

export default function Courses() {
  return (
    <>
      <CommonLayout>
        <CoursesHero />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
