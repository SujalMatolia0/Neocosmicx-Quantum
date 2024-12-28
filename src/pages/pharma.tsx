import { CommonFooter } from '@/components/footer/common';
import { CommonSectorHero } from '@/components/indie/common_sector_hero';
import { CommonSectorSection } from '@/components/indie/common_sector_section';
import { CommonLayout } from '@/components/layout/common';
import { QMLSection1 } from '@/components/pages/q-ml/section1';

export default function Pharma() {
  return (
    <>
      <CommonLayout>
        <CommonSectorHero
          section="Sector"
          page="Pharma"
          image="/pharma-hero.png"
          text="Innovate with unparalleled precision, optimize mission planning, engineering, and strategic decision-making for Aerospace & Defense."
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
