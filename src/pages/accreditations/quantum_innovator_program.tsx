import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { QuantumBoffinHero } from '@/components/pages/accreditation/quantum_innovator/hero';

export default function QuantumBoffin() {
  return (
    <>
      <CommonLayout>
        <QuantumBoffinHero />
        {/* <QuantumBoffinSection1 />
        <QuantumBoffinSection2 />
        <QuantumBoffinSection3 /> */}
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
