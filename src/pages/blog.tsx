import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { BlogHero } from '@/components/pages/blog/hero';
import { BlogSection1 } from '@/components/pages/blog/section1';
import { BlogSection2 } from '@/components/pages/blog/section2';
import { BlogSection3 } from '@/components/pages/blog/section3';

export default function Blog() {
  return (
    <>
      <CommonLayout>
        <BlogHero />
        <BlogSection1 />
        <BlogSection2 />
        <BlogSection3 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
