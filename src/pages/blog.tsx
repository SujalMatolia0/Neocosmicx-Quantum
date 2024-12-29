import { CommonFooter } from '@/components/footer/common';
import { CommonFeatureCard } from '@/components/indie/common_feature_card';
import { CommonLayout } from '@/components/layout/common';
import { BlogHero } from '@/components/pages/blog/hero';
import { BlogSection1 } from '@/components/pages/blog/section1';

export default function Blog() {
  return (
    <>
      <CommonLayout>

        <BlogHero />

        <BlogSection1 />        <CommonFooter />
      </CommonLayout>
    </>
  );
}
