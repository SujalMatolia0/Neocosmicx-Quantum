import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { QuantumBoffinHero } from '@/components/pages/accreditation/quantum_innovator/hero';

export default function QuantumBoffin() {
  return (
    <>
      <CommonLayout
        footer={<CommonFooter />}
        header={<CommonHeader />}
        fixedHeader
      >
        <QuantumBoffinHero />
        {/* <QuantumBoffinSection1 />
        <QuantumBoffinSection2 />
        <QuantumBoffinSection3 /> */}
      </CommonLayout>
    </>
  );
}
