import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { MembershipHero } from '@/components/pages/resources/membership/hero';
import { MembershipData } from '@/lib/data/memberships';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const membershipId =
    typeof ctx.params?.id === 'string' ? Number(ctx.params.id) : null;

  if (!membershipId) {
    return {
      notFound: true,
    };
  }

  const Membership = MembershipData.find(
    (_membership) => _membership.id === membershipId
  );

  if (!Membership) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      Membership,
    },
  };
};

export default function Membership({
  Membership,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
     <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
      <MembershipHero  Membership={Membership} />
     
    </CommonLayout>
  );
}
