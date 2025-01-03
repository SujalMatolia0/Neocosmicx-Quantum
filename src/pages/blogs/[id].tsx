import { CommonLayout } from '@/components/layout/common';
import { BlogCommon } from '@/components/pages/blog/bolgcommon';
import { BlogData } from '@/lib/data/blog';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';



export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const blogId = typeof ctx.params?.id === 'string' ? Number(ctx.params.id) : null;

    if (!blogId) {
        return {
            notFound: true,
        };
    }

    const Blog = BlogData.find((_blog) => _blog.id === blogId);

    if (!Blog) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            Blog,
        },
    };
};

export default function BlogPost({
    Blog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <CommonLayout>
            <BlogCommon BlogData={Blog} />
        </CommonLayout>
    );
}
