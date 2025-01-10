import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { MembershipHero } from '@/components/pages/resources/membership/hero';
import { MembershipSection1 } from '@/components/pages/resources/membership/section1';
import { MembershipSection2 } from '@/components/pages/resources/membership/section2';
import { MainMembershipData } from '@/lib/data/memberships';

export default function Membership() {
  return (
    <>
       <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
        <MembershipHero Membership={MainMembershipData[0]} />
        <MembershipSection1 />
        <MembershipSection2 />
       
      </CommonLayout>
    </>
  );
}
