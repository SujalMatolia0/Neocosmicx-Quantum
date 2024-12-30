import { CommonLayout } from '@/components/layout/common';
import { MembershipHero } from '@/components/pages/membership/hero';
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

export default function BlogPost({
  Membership,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <CommonLayout>
      <MembershipHero Membership={Membership} />

    </CommonLayout>
  );
}
