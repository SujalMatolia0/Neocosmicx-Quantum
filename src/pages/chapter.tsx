import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { ChapterHero } from '@/components/pages/chapter/hero';
import { ChapterSection1 } from '@/components/pages/chapter/section1';
import { ChapterSection2 } from '@/components/pages/chapter/section2';
import { ChapterSection3 } from '@/components/pages/chapter/section3';

export default function Chapter() {
  return (
    <>
      <CommonLayout>
        <ChapterHero />
        <ChapterSection1 />
        <ChapterSection2 />
        <ChapterSection3 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
