import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { QuantumBoffinHero } from '@/components/pages/quantum_boffin/hero';
import { QuantumBoffinSection1 } from '@/components/pages/quantum_boffin/section1';
import { QuantumBoffinSection2 } from '@/components/pages/quantum_boffin/section2';
import { QuantumBoffinSection3 } from '@/components/pages/quantum_boffin/section3';

export default function QuantumBoffin() {
  return (
    <>
      <CommonLayout>
        <QuantumBoffinHero />
        <QuantumBoffinSection1 />
        <QuantumBoffinSection2 />
        <QuantumBoffinSection3 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
