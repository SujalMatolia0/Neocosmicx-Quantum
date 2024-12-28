import { CommonFooter } from '@/components/footer/common';
import { CommonSectorHero } from '@/components/indie/common_sector_hero';
import { CommonSectorSection } from '@/components/indie/common_sector_section';
import { CommonLayout } from '@/components/layout/common';
import { QMLSection1 } from '@/components/pages/q-ml/section1';

export default function QML() {
  return (
    <>
      <CommonLayout>
        <CommonSectorHero
          section="Sector"
          page="Machine Learning"
          image="/ML-Hero.png"
          text="Analyze complex datasets, optimize portfolios, accelerate complex financial modeling, enhance security measures, paving the way for unprecedented insights and efficiency gains."
        />
        <QMLSection1 />
        <CommonSectorSection
          key={1}
          title="Pasqal supports sustainability"
          text="With the limitations of processing capabilities of classical computers becoming evermore clear and foreseeable, quantum has the potential to accelerate the transition to a sustainable and resilient future."
          image="/quantum-27.webp"
        />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
