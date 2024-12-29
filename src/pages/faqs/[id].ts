import { FaqData } from '@/lib/data/faq';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const faqId =
    typeof ctx.params?.id === 'string' ? Number(ctx.params.id) : null;

  if (!faqId) {
    return {
      notFound: true,
    };
  }

  const Faq = FaqData.find((_faq) => _faq.id === faqId);

  if (!Faq) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      Faq,
    },
  };
};

export default function FAQ({
  Faq,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
}
