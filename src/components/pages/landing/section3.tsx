import { CommonCard } from '@/components/indie/common_card';
import { CommonSectionCard } from '@/components/indie/common_section_card';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { Stack, Title } from '@mantine/core';

export const LandingSection3 = () => {
  return (
    <>
      <Stack pt={SIZE_CONFIG.SECTION_SPACE} align="center" mih="100vh">
        <Title fw={300} maw={600} ta="center" c={COLOR.TURQUOISE}>
          Our dedicated team seamlessly integrates with your business so you can
          scale with confidence.
        </Title>
        <CommonCard
          title="hi"
          image="/"
          description="sdjsakjhasjhabdshf adhbfaksjbhf"
          data={[{ title: 'Title 1' }, { title: 'Title 2' }]}
        />
        <CommonSectionCard
          title="From our Partners"
          description="I would not work with any other service provider. The best part of
        working with TechSpeed is they provide you with flexibility. My
        advice for anyone considering TechSpeed is pretty straightforward.
        Do it."
          writer="Rajiv Chegu"
          position="Strategy and New Business"
          image="https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        />
      </Stack>
    </>
  );
};
