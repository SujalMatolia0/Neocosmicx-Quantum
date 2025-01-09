import { CommonFeatureCard } from '@/components/indie/common_feature_card';
import { SIZE_CONFIG } from '@/configs/theme';
import { Container, SimpleGrid, Stack, Text } from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    id: 1,
    image: '/quantum-25.avif',
    title: 'Feature title test',
    text: 'Feature text test line',
  },
  {
    id: 2,

    image: '/quantum-25.avif',
    title: 'Feature title test',
    text: 'Feature text test line',
  },
  {
    id: 3,
    image: '/quantum-25.avif',
    title: 'Feature title test',
    text: 'Feature text test line',
  },
  {
    id: 4,
    image: '/quantum-25.avif',
    title: 'Feature title test',
    text: 'Feature text test line',
  },
];
export const BlogSection1 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <Stack>
          <Text>Feature</Text>
          <SimpleGrid cols={4} spacing={0}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <CommonFeatureCard
                    image={item.image}
                    text={item.text}
                    title={item.title}
                    href={`/blogs/${item.id}`}
                  />
                </>
              ))
            )}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
};
