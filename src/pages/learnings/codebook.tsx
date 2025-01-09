import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { CodeBookHero } from '@/components/pages/learning/codebook/hero';
import { CodeBookSection1 } from '@/components/pages/learning/codebook/section1';
import { CodeBookSection2 } from '@/components/pages/learning/codebook/section2';
import { CodeBookSection3 } from '@/components/pages/learning/codebook/section3';
import { CodeBookSection4 } from '@/components/pages/learning/codebook/section4';

export default function Codebook() {
  return (
    <>
      <CommonLayout>
        <CodeBookHero />
        <CodeBookSection1 />
        <CodeBookSection2 />
        <CodeBookSection3 />
        <CodeBookSection4 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
