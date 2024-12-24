import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Carousel } from '@mantine/carousel';
import {
  Stack,
  Title,
  SimpleGrid,
  Center,
  AspectRatio,
  Text,
  Image,
  Group,
  Button,
  Paper,
  Badge,
  Container,
} from '@mantine/core';
import { IconBoltFilled, IconFlame } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    image: '/noor.png',
    course: 'Course',
    text: 'detail',
  },
  {
    image: '/noor.png',
    course: 'Course',
    text: 'detail',
  },
  {
    image: '/noor.png',
    course: 'Course',
    text: 'detail',
  },
  {
    image: '/noor.png',
    course: 'Course',
    text: 'detail',
  },
  {
    image: '/noor.png',
    course: 'Course',
    text: 'detail',
  },
];
export const ChallengesSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Container size="xl">
        <Stack
          p="md"
          py={SIZE_CONFIG.SECTION_SPACE}
          align="center"
          justify="space-between"
        >
          <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
            <Title>See challenges by difficulty</Title>
            <Group>
              <Button
                color={COLOR.GREEN}
                leftSection={<IconBoltFilled size={15} />}
              >
                Beginner
              </Button>
              <Button
                color={COLOR.PEACH}
                leftSection={<IconBoltFilled size={15} />}
              >
                Intermediate
              </Button>
              <Button
                color={COLOR.GRAY}
                leftSection={<IconBoltFilled size={15} />}
              >
                Advanced
              </Button>
            </Group>
          </Stack>
          <Group p="md" align="baseline" w="100%" justify="space-between">
            <Title size="xl">Getting Started</Title>
            <Text size="sm">See All 7</Text>
          </Group>
          <Carousel
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
                    <Paper withBorder p="md">
                      <Stack justify="space-between">
                        <Center>
                          <AspectRatio ratio={12 / 7}>
                            <Image radius="md" alt="image" src={item.image} />
                          </AspectRatio>
                        </Center>

                        <Stack gap={1} align="center">
                          <Text ta="left" size="md">
                            {item.course}
                          </Text>
                          <Text c="dimmed" ta="left" size="sm">
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
        </Stack>
      </Container>
    </>
  );
};
