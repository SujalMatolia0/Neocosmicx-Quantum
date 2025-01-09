import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { TrainingHero } from '@/components/pages/learning/training/hero';
import { TrainingSection1 } from '@/components/pages/learning/training/section1';
import { TrainingSection2 } from '@/components/pages/learning/training/section2';
import { TrainingSection3 } from '@/components/pages/learning/training/section3';
import { TrainingSection4 } from '@/components/pages/learning/training/section4';
import { TrainingSection5 } from '@/components/pages/learning/training/section5';

export default function Courses() {
  return (
    <>
      <CommonLayout>
        <TrainingHero />
        <TrainingSection1 />
        <TrainingSection2 />
        <TrainingSection3 />
        <TrainingSection4 />
        <TrainingSection5 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
