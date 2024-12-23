import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Card,
  Center,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { title } from 'process';
import { Children } from 'react';

const DATA = [
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
  {
    image: '/quantum-27.webp',
    title: 'Introduction to Quantum',
    text: '3 Topics',
  },
];
export const CodeBookSection3 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack py={SIZE_CONFIG.SECTION_SPACE} p="md" align="center">
        <Title>Module</Title>
        <Text maw={700} ta="center">
          Select an area of quantum computing and enhance your expertise through
          a blend of theory and hands-on codercises with PennyLane.
        </Text>
        <SimpleGrid spacing="md" cols={{ base: 1, md: 3 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper
                  style={{ borderRadius: '10px', borderColor: COLOR.TURQUOISE }}
                  mih={MD ? '30vh' : '50vh'}
                  w={MD ? 250 : 350}
                  radius={0}
                  p="md"
                  withBorder
                  bg="white"
                  
                >
                  <Stack>
                    <Image radius="lg" alt="image" src={item.image} />
                    <Title size="md">{item.title}</Title>
                    <Text c="dimmed">{item.text}</Text>
                  </Stack>
                </Paper>{' '}
              </>
            ))
          )}
        </SimpleGrid>
      </Stack>
    </>
  );
};
