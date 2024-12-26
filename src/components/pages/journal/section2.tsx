import { SIZE_CONFIG } from '@/configs/theme';
import {
  AspectRatio,
  Button,
  Container,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
  {
    image: '/quantum-25.avif',
    title: 'Volume2 | Issue 2',
    button: 'Access Edition',
  },
];
export const JournalSection2 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE}>
        <Stack align="center">
          <Title>Past Edition</Title>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={70} verticalSpacing={70}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Paper>
                    <Stack align="center">
                      <AspectRatio ratio={7.5 / 9}>
                        <Image
                          radius="lg"   
                          src={item.image}
                          alt="journal-image"
                        />
                      </AspectRatio>
                      <Title size="lg">{item.title}</Title>
                      <Button>{item.button}</Button>{' '}
                    </Stack>
                  </Paper>
                </>
              ))
            )}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
};
