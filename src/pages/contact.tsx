import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { ContactHero } from '@/components/pages/contact/hero';

export default function Contact() {
  return (
    <>
      <CommonLayout>
        <ContactHero />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
