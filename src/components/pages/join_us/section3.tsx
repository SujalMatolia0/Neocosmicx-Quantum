import { CommonButton } from '@/components/indie/common_button';
import { SIZE_CONFIG } from '@/configs/theme';
import {
  AspectRatio,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    title: 'Mountain View',
    text: '120 jobs',
  },
  {
    title: 'Mountain View',
    text: '120 jobs',
  },
  {
    title: 'Mountain View',
    text: '120 jobs',
  },
  {
    title: 'Mountain View',
    text: '120 jobs',
  },
  {
    title: 'Mountain View',
    text: '120 jobs',
  },
  {
    title: 'Mountain View',
    text: '120 jobs',
  },
];
export const JoinUsSection3 = () => {
  return (
    <>
      <Container mih="100vh" size="lg" py={SIZE_CONFIG.SECTION_SPACE}>
        <SimpleGrid h="100%" cols={{ base: 1, md: 2 }}>
          <Stack>
            <Text>locations</Text>
            <Title>Our locations</Title>
            <Text size="md">
              Large or small, each one of our offices is designed to inspire
              innovation, big ideas, and community.{' '}
            </Text>
            <SimpleGrid cols={{ base: 2, md: 3 }}>
              {Children.toArray(
                DATA.map((item) => (
                  <>
                    <Stack>
                      <Title size="lg">{item.title}</Title>
                      <Text size="md">{item.text}</Text>
                    </Stack>
                  </>
                ))
              )}
            </SimpleGrid>{' '}
            <CommonButton title="View all locations" />
          </Stack>
          <AspectRatio ratio={11 / 8}>

            <Image radius="lg" mih='60vh' alt="image" m="auto" src="/locations.jpeg" />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </>
  );
};
