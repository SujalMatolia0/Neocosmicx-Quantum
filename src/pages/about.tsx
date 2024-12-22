import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { AboutHero } from '@/components/pages/about/hero';
import { AboutSection1 } from '@/components/pages/about/section1';
import { AboutSection2 } from '@/components/pages/about/section2';

export default function About() {
  return (
    <>
      <CommonLayout>
        <AboutHero />
        <AboutSection1 />
        <AboutSection2 />
        {/* Same in landing page just remove Our service section */}
        {/* <LandingSection5 /> */}
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
