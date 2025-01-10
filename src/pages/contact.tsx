import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { ContactHero } from '@/components/pages/contact/hero';

export default function Contact() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <ContactHero />
      </CommonLayout>
    </>
  );
}
