import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import {
  Container,
  SimpleGrid,
  Paper,
  BackgroundImage,
  Stack,
  Title,
  Badge,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/quantum-25.avif',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
  {
    image: '/quantum-25.avif',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
  {
    image: '/quantum-25.avif',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
  {
    image: '/quantum-25.avif',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
  {
    image: '/quantum-25.avif',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
];
export const TrainingSection1 = () => {
  return (
    <>
      <Container mih="100vh" size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper mih="60vh">
                  <BackgroundImage radius="lg" h="100%" src={item.image}>
                    <Stack p="md" h="100%" justify="space-between">
                      <Badge color={COLOR.GREEN}>{item.badge}</Badge>
                      <Stack>
                        <Title c={COLOR.GREEN}>{item.title}</Title>
                        <CommonButton
                          title={item.button || 'Explore Further'}
                        />
                      </Stack>
                    </Stack>
                  </BackgroundImage>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
