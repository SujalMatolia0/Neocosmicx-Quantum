import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  AspectRatio,
  Button,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/noor.png',
    level: 'Expert',
    title: 'Quantum Course',
    detail: 'course description',
  },
  {
    image: '/noor.png',
    level: 'Expert',
    title: 'Quantum Course',
    detail: 'course description',
  },
  {
    image: '/noor.png',
    level: 'Expert',
    title: 'Quantum Course',
    detail: 'course description',
  },
  {
    image: '/noor.png',
    level: 'Expert',
    title: 'Quantum Course',
    detail: 'course description',
  },
  {
    image: '/noor.png',
    level: 'Expert',
    title: 'Quantum Course',
    detail: 'course description',
  },
  {
    image: '/noor.png',
    level: 'Expert',
    title: 'Quantum Course',
    detail: 'course description',
  },
];

export const CoursesHero = () => {
//   const { MD } = useMediaQuerys();
  return (
    <>
      <Container p="md" py={SIZE_CONFIG.SECTION_SPACE} size="md">
        <Group>
          <Button>Q-ML</Button>
          <Button>Q-ML</Button>
          <Button>Q-ML</Button>
          <Button>Q-ML</Button>
          <Button>Q-ML</Button>
          <Button>Q-ML</Button>
        </Group>
        <SimpleGrid p="md" cols={{ base: 1, md: 3 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper
                  style={{ borderRadius: '10px', borderColor: COLOR.GREEN }}
                //   mih={MD ? '30vh' : '30vh'}
                  radius={0}
                  withBorder
                  bg="transparent"
                  shadow="md"
                  p="md"
                  //    withBorder
                >
                  <Stack align="center">
                    <AspectRatio ratio={17 / 11}>
                      <Image radius="lg" src={item.image} alt="Image" />
                    </AspectRatio>{' '}
                    <Stack align="center" gap={2}>
                      <Text>{item.level}</Text>
                      <Title size="lg" ta="center">
                        {item.title}
                      </Title>
                      <Text size="sm">{item.detail}</Text>
                    </Stack>
                  </Stack>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
