import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import {
  BackgroundImage,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/quantum-25.avif',
    title: "Learn How we're building a more diverse and inclusive platform",
    button: 'Read about our effort',
  },
  {
    image: '/quantum-25.avif',
    title: "Learn How we're building a more diverse and inclusive platform",
    button: 'Read about our effort',
  },
  {
    image: '/quantum-25.avif',
    title: "Learn How we're building a more diverse and inclusive platform",
    button: 'Read about our effort',
  },
  {
    image: '/quantum-25.avif',
    title: "Learn How we're building a more diverse and inclusive platform",
    button: 'Read about our effort',
  },
];

export const JoinUsSection4 = () => {
  return (
    <>
      <Stack p="md" align="center" h="100%">
        <Text>Learn</Text>
        <Title>Working at CVRCQRD</Title>

        <Container mih="100vh" size="xl">
          <SimpleGrid cols={{ base: 1, md: 2 }}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Paper mih="60vh">
                    <BackgroundImage radius="lg" h="100%" src={item.image}>
                      <Stack p="md" h="100%" justify="end">
                        <Title c={COLOR.GREEN}>{item.title}</Title>
                        <CommonButton title={item.button || 'Learn More'} />
                      </Stack>
                    </BackgroundImage>
                  </Paper>
                </>
              ))
            )}
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
};
