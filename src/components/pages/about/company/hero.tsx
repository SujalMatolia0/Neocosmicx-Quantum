import { COLOR } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { BackgroundImage, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    title: 'We turn',
    text: 'Quantum dreams into tangible solutions that transform industries and redefine the future.',
  },
  {
    title: 'With Us',
    text: 'Discover the potential of Quantum Computing, your gateway to tomorrow’s technology, today.',
  },
  {
    title: 'We',
    text: 'We bridge the gap between quantum theory and practical applications to empower your business.',
  },
  {
    title: 'With Us',
    text: 'Experience the next frontier of technology—Quantum Computing, made simple.',
  },
];
export const AboutHero = () => {
  const size = useSizeHelper();
  const { MD } = useMediaQuerys();
  return (
    <>
      <BackgroundImage src='/company_hero.jpeg'>
        <Stack align="center" mih="69vh" justify="space-evenly" p='md'>
          <Stack maw={1100}>
            <Title c={COLOR.GREEN} size={MD ? size.TITLE_1 : '8vw'} ta="center">
              Where Quantum Computing Meets Real-World Impact.
            </Title>
            <Text c='white' size={MD ? '1.5vw' : '5vw'} ta="center">
              We innovate Quantum solutions, exceptional services
              with competitive pricing.
            </Text>
          </Stack>
          </Stack >
          <SimpleGrid p="md" spacing={0} cols={{ base: 1, md: 4 }}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Paper
                    p="md"
                    style={{ borderColor: COLOR.TURQUOISE }}
                    radius={0}
                    withBorder
                    mih={140}
                  >
                    <Stack justify="center">
                      <Text size={MD ? '2vw' : '5vw'}>{item.title}</Text>
                      <Text size={MD ? '1.5vw' : '7vw'}>{item.text}</Text>
                    </Stack>
                  </Paper >
                </>
              ))
            )}
          </SimpleGrid >
      </BackgroundImage >
    </>
  );
};
