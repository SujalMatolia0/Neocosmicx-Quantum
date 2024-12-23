import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Stack,
  Title,
  SimpleGrid,
  Button,
  Text,
  Paper,
  Image,
} from '@mantine/core';
import { Children } from 'react';

// Reference page
// https://pennylane.ai/codebook

const DATA = [
  {
    image: '/quantum-27.webp',
    title: 'Form',
    text: 'Have a technical question? Join our discussion form ',
  },
  {
    image: '/quantum-27.webp',
    title: 'Form',
    text: 'Have a technical question? Join our discussion form ',
  },
  {
    image: '/quantum-27.webp',
    title: 'Form',
    text: 'Have a technical question? Join our discussion form ',
  },
];
export const CodeBookSection4 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        py={SIZE_CONFIG.SECTION_SPACE}
        justify="center"
        bg={COLOR.GRAY}
        p="md"
        align="center"
        mih={MD ? '60vh' : '60vh'}
      >
        <Title ta="center">New Codebook content</Title>
        <Text ta="center">
          Here's the latest to help you navigate your quantum journey.
        </Text>
        <SimpleGrid cols={{ base: 1, md: 3 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper
                  style={{ borderRadius: '10px', borderColor: COLOR.TURQUOISE }}
                  mih={MD ? '30vh' : '60vh'}
                  w={MD ? 250 : 350}
                  radius={0}
                  p="md"
                  withBorder
                  bg="white"
                >
                  <Stack align="center">
                    <Image radius="lg" src="/quantum-27.webp" />
                    <Title>{item.title}</Title>
                    <Text ta="center">{item.text} </Text>
                  </Stack>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Stack>
    </>
  );
};
