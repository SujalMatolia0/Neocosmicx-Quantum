import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonFaqAccredation } from '@/components/indie/common_faq_accredation';
import { CommonLayout } from '@/components/layout/common';
import { QuantumEngineerHero } from '@/components/pages/accreditation/quantum_engineer/hero';
import { QuantumEngineerSection1 } from '@/components/pages/accreditation/quantum_engineer/section1';
import { QuantumEngineerSection2 } from '@/components/pages/accreditation/quantum_engineer/section2';
import { QuantumEngineerSection3 } from '@/components/pages/accreditation/quantum_engineer/section3';

const FAQ_DATA = [
  {
    id:'1',
    question: 'Who can appear for the exam?',
    answer:
      'Anyone who meets the eligibility criteria Additional resources are provided on the official websiteAdditional resources are provided on the official websitecan appear for the exam.',
  },
  {
    id:'2',
    question: 'What is the syllabus for the exam?',
    answer:
      'The  Additional resources are provided on the officialAdditional resources are provided on the official website websiteAdditional resources are provided on the official website syllabus covers topics A, B, C, and D.',
  },
  {
    id:'3',
    question: 'What is the syllabus for the exam?',
    answer:
      'The  Additional resources are provided on the officialAdditional resources are provided on the official website websiteAdditional resources are provided on the official website syllabus covers topics A, B, C, and D.',
  },
  {
    id:'4',
    question: 'What is the syllabus for the exam?',
    answer:
      'The  Additional resources are provided on the officialAdditional resources are provided on the official website websiteAdditional resources are provided on the official website syllabus covers topics A, B, C, and D.',
  },
];

export default function QuantumEngineer() {
  return (
    <>
      <CommonLayout
        footer={<CommonFooter />}
        header={<CommonHeader />}
        fixedHeader
      >
        <QuantumEngineerHero />
        <QuantumEngineerSection1 />
        <QuantumEngineerSection2 />
        <QuantumEngineerSection3 />
        <CommonFaqAccredation data={FAQ_DATA} />
      </CommonLayout>
    </>
  );
}
