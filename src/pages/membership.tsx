import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { MembershipHero } from '@/components/pages/membership/hero';
import { MembershipSection1 } from '@/components/pages/membership/section1';
import { MembershipSection2 } from '@/components/pages/membership/section2';

export default function Membership() {
  return (
    <>
      <CommonLayout>
        <MembershipHero />
        <MembershipSection1 />
        <MembershipSection2 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
