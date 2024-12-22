import { COLOR } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    title: 'We are',
    text: 'Dedicated to total client satisfaction.',
  },
  {
    title: 'We are',
    text: 'Powered by proprietary technologies.',
  },
  {
    title: 'We are',
    text: 'Built on a culture of data integrity and security.',
  },
  {
    title: 'We are',
    text: 'Anchored by on-shore project management.',
  },
];
export const AboutHero = () => {
  const size = useSizeHelper();
  const { MD } = useMediaQuerys();
  return (
    <>
      {/* <Center mih="100vh"> */}
      <Stack align="center" mih="100vh" justify="space-evenly">
        <Stack maw={900}>
          <Title size={MD ? size.TITLE_1 : '8vw'} ta="center">
            We strive to be your valued partner.
          </Title>
          <Text c="dimmed" size={MD ? '2vw' : '5vw'} ta="center">
            We innovate Quantum solutions, exceptional customer service
            competitive pricing.
          </Text>
        </Stack>
        <SimpleGrid p="md" spacing={0} cols={{ base: 1, md: 4 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper
                  p="md"
                  style={{ borderColor: COLOR.TURQUOISE }}
                  // h={120}
                  //   w={MD ? 250 : 350}
                  radius={0}
                  withBorder
                  mih={140}
                >
                  <Stack justify="center">
                    <Text size={MD ? '2vw' : '5vw'}>{item.title}</Text>
                    <Text size={MD ? '1.5vw' : '7vw'}>{item.text}</Text>
                  </Stack>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Stack>
      {/* </Center> */}
    </>
  );
};
