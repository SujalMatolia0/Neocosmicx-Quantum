import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { BlogSection1 } from '@/components/pages/blog/blogs';
import { BlogHero } from '@/components/pages/blog/hero';

export default function Blog() {
  return (
    <>
      <CommonLayout>
        {/* <CommonHero
          button="Test"
          image="/hero-removebg.png"
          title="You are at at solution page"
          text="welcome to neocosmicx"
          data={[
            { line: 'line one of hero page' },
            { line: 'line two of hero page' },
            { line: 'line three of hero page' },
          ]}
        /> */}
        <BlogHero />
        {/* <SolutionSection1 /> */}
        <BlogSection1 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
