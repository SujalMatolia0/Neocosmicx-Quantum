import { CommonFooter } from '@/components/footer/common';
import { CommonFaqAccredation } from '@/components/indie/common_faq_accredation';
import { CommonLayout } from '@/components/layout/common';
import { QuantumEngineerHero } from '@/components/pages/accreditation/quantum_engineer/hero';
import { QuantumEngineerSection1 } from '@/components/pages/accreditation/quantum_engineer/section1';
import { QuantumEngineerSection2 } from '@/components/pages/accreditation/quantum_engineer/section2';
import { QuantumEngineerSection3 } from '@/components/pages/accreditation/quantum_engineer/section3';

const FAQ_DATA = [
  {
    question: 'Who can appear for the exam?',
    answer: {
      answer: [
        {
          text: 'Anyone who meets the eligibility criteria Additional resources are provided on the official websiteAdditional resources are provided on the official websitecan appear for the exam.',
        },
        {
          text: 'Additional resources are provided on the official websiteAdditional resources are provided on the official websiteAdditional resources are provided on the official websiteThe eligibility criteria vary based on the course.',
        },
      ],
    },
  },
  {
    question: 'What is the syllabus for the exam?',
    answer: {
      answer: [
        {
          text: 'The  Additional resources are provided on the officialAdditional resources are provided on the official website websiteAdditional resources are provided on the official website syllabus covers topics A, B, C, and D.',
        },
        {
          text: 'Additional resources are provided on the official websiteAdditional resources are provided on the official websiteAdditional resources are provided on the official website.The syllabus covers topics A, B, C, and D.',
        },
      ],
    },
  },
  {
    question: 'What is the syllabus for the exam?',
    answer: {
      answer: [
        {
          text: 'The  Additional resources are provided on the officialAdditional resources are provided on the official website websiteAdditional resources are provided on the official website syllabus covers topics A, B, C, and D.',
        },
        {
          text: 'Additional resources are provided on the official websiteAdditional resources are provided on the official websiteAdditional resources are provided on the official website.The syllabus covers topics A, B, C, and D.',
        },
      ],
    },
  },
  {
    question: 'What is the syllabus for the exam?',
    answer: {
      answer: [
        {
          text: 'The  Additional resources are provided on the officialAdditional resources are provided on the official website websiteAdditional resources are provided on the official website syllabus covers topics A, B, C, and D.',
        },
        {
          text: 'Additional resources are provided on the official websiteAdditional resources are provided on the official websiteAdditional resources are provided on the official website.The syllabus covers topics A, B, C, and D.',
        },
      ],
    },
  },
];

export default function QuantumEngineer() {
  return (
    <>
      <CommonLayout>
        <QuantumEngineerHero />
        <QuantumEngineerSection1 />
        <QuantumEngineerSection2 />
        <QuantumEngineerSection3 />
        <CommonFaqAccredation data={FAQ_DATA} />;
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
