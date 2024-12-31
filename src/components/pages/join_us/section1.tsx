import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Carousel } from '@mantine/carousel';
import {
  AspectRatio,
  Center,
  Container,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
];
export const JoinUsSection1 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        py={SIZE_CONFIG.SECTION_SPACE}
        align="center"
        justify="space-between"
      >
        <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
          <Title>Fellows Directory</Title>
          <Text ta="center" c="dimmed" maw={500}>
            A global community of over 500 remarkable individuals who are
            collaborating across disciplines to spark future-shaping change.
          </Text>
        </Stack>
        <Container size="lg">
          <Carousel
            // controlsOffset={0}
            loop
            mih="20vh"
            slideSize={MD ? '25%' : '50%'}
            slideGap="md"
            align="start"
            slidesToScroll={1}
          >
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Carousel.Slide>
                    <Paper p={0} bg={COLOR.PEACH}>
                      <Stack gap='md'>
                        <Center>
                          <AspectRatio ratio={17 / 10}>
                            <Image
                              p={0}
                              radius="lg"
                              alt="image"
                              maw={MD ? 280 : 300}
                              src={item.image}
                            />
                          </AspectRatio>
                        </Center>
                        <Stack gap={1} align="center">
                          <Text ta="left" size="md">
                            {item.title}
                          </Text>
                          <Text c="dimmed" ta="center" size="sm">
                            {item.text}
                          </Text>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Carousel.Slide>
                </>
              ))
            )}
          </Carousel>
        </Container>
      </Stack>
    </>
  );
};
