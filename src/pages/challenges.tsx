import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { ChallengesHero } from '@/components/pages/challanges/hero';
import { ChallengesSection1 } from '@/components/pages/challanges/section1';
import { ChallengesSection2 } from '@/components/pages/challanges/section2';

export default function Challenges() {
  return (
    <>
      <CommonLayout>
        <ChallengesHero />
        <ChallengesSection1 />
        <ChallengesSection2 />
        {/* <ChallengesSection3/> */}
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
