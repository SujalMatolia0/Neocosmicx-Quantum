import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Carousel } from '@mantine/carousel';
import { Button, Group, Image, Paper, Stack, Text } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { Children, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const DATA = [
  {
    title: 'Easily navigate the pennylane codebook ',
    text: 'Select an area of quantum computing and enhance your expertise through a blend of theory and hands-on codercises with PennyLane.',
    image: '/quantum-27.webp',
    button: 'Start Here!',
  },
  {
    title: 'Easily navigate the pennylane codebook ',
    text: 'Select an area of quantum computing and enhance your expertise through a blend of theory and hands-on codercises with PennyLane.',
    image: '/quantum-27.webp',
    button: 'Start Here!',
  },
];
export const CodeBookSection1 = () => {
  const { MD } = useMediaQuerys();

  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <>
      <Carousel
        px={MD ? '100' : 'xs'}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        plugins={[autoplay.current]}
        // loop
        p="md"
        withIndicators
        withControls
      >
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Carousel.Slide p="xl">
                <Paper
                  p={MD ? 'lg' : 'lg'}
                  withBorder
                  style={{ borderColor: '#c7e410' }}
                >
                  <Group justify="space-around">
                    {MD ? null : (
                      <Image h={200} radius="lg" src={item.image} alt="image" />
                    )}
                    <Stack maw={MD ? '50%' : ''}>
                      <Text>{item.title}</Text>
                      <Text>{item.text}</Text>

                      <Group>
                        <Text w="fit-content" variant="transparent">
                          {item.button}
                        </Text>
                        <IconChevronRight />
                      </Group>
                    </Stack>
                    {MD ? (
                      <Image h={200} radius="lg" src={item.image} alt="image" />
                    ) : null}
                  </Group>
                </Paper>
              </Carousel.Slide>
            </>
          ))
        )}
      </Carousel>
    </>
  );
};
