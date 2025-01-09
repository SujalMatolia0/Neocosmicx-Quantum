import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { ChapterHero } from '@/components/pages/resources/chapter/hero';
import { ChapterSection1 } from '@/components/pages/resources/chapter/section1';
import { ChapterSection2 } from '@/components/pages/resources/chapter/section2';
import { ChapterSection3 } from '@/components/pages/resources/chapter/section3';
import { ChapterSection4 } from '@/components/pages/resources/chapter/section4';
import { ChapterSection5 } from '@/components/pages/resources/chapter/section5';


export default function Chapter() {
  return (
    <>
      <CommonLayout>
        <ChapterHero />
        <ChapterSection1 />
        <ChapterSection2 />
        <ChapterSection3 />
        <ChapterSection4 />
        <ChapterSection5 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
