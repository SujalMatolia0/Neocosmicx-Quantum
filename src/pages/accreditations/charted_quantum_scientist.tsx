import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonFaqAccredation } from '@/components/indie/common_faq_accredation';
import { CommonLayout } from '@/components/layout/common';
import { QuantumScientistHero } from '@/components/pages/accreditation/quantum_scientist/hero';
import { QuantumScientistSection1 } from '@/components/pages/accreditation/quantum_scientist/section1';
import { QuantumScientistSection2 } from '@/components/pages/accreditation/quantum_scientist/section2';
import { QuantumScientistSection3 } from '@/components/pages/accreditation/quantum_scientist/section3';

const FAQ_DATA = [
  {
    id:'1',
    question: 'Who can appear for the exam?',
    answer:
      'Anyone who meets the eligibility criteria Additional resources are provided on the official websiteAdditional resources are provided on the official websitecan appear for the exam.',
  },
  {
    id:'2',
    question: 'Who can appear for the exam?',
    answer:
      'Anyone who meets the eligibility criteria Additional resources are provided on the official websiteAdditional resources are provided on the official websitecan appear for the exam.',
  },
  {
    id:'3',
    question: 'Who can appear for the exam?',
    answer:
      'Anyone who meets the eligibility criteria Additional resources are provided on the official websiteAdditional resources are provided on the official websitecan appear for the exam.',
  },
  {
    id:'4',
    question: 'Who can appear for the exam?',
    answer:
      'Anyone who meets the eligibility criteria Additional resources are provided on the official websiteAdditional resources are provided on the official websitecan appear for the exam.',
  },
];

export default function QuantumScientist() {
  return (
    <>
      <CommonLayout
        footer={<CommonFooter />}
        header={<CommonHeader />}
        fixedHeader
      >
        <QuantumScientistHero />
        <QuantumScientistSection1 />
        <QuantumScientistSection2 />
        <QuantumScientistSection3 />
        <CommonFaqAccredation data={FAQ_DATA} />;
      </CommonLayout>
    </>
  );
}
