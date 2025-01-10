import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { CoursesHero } from '@/components/pages/learning/courses/hero';

export default function Courses() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <CoursesHero />
       
      </CommonLayout>
    </>
  );
}
