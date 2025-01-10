import { CommonFooter } from '@/components/footer/common';
import { CommonHeader } from '@/components/header/common';
import { CommonLayout } from '@/components/layout/common';
import { CommonSolutions } from '@/components/pages/solutions';
import { SolutionsData } from '@/lib/data/solutions';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const solutionSlug =
    typeof ctx.params?.slug === 'string' ? ctx.params.slug : '';

  if (!solutionSlug) {
    return {
      notFound: true,
    };
  }

  const solution = SolutionsData.find(
    (_solution) => _solution.slug === solutionSlug
  );

  if (!solution) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      solution,
    },
  };
};

export default function Category({
  solution,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <CommonLayout footer={<CommonFooter/>} header={<CommonHeader />} fixedHeader>
      <CommonSolutions solution={solution} />
    </CommonLayout>
  );
}
