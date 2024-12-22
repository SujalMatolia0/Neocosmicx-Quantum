import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  AspectRatio,
  Center,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    step: 'Step 1: Free Data Sample',
    image: '/quantum-27.webp',
    text: 'To ensure accuracy and efficiency, we’ll begin with a FREE data sample and review of your project scope. This allows us to determine the best processing strategy, average processing time, turnaround time, accuracy level, and ideal staff profile for your project.',
  },
  {
    step: 'Step 1: Free Data Sample',
    image: '/quantum-27.webp',
    text: 'To ensure accuracy and efficiency, we’ll begin with a FREE data sample and review of your project scope. This allows us to determine the best processing strategy, average processing time, turnaround time, accuracy level, and ideal staff profile for your project.',
  },
  {
    step: 'Step 1: Free Data Sample',
    image: '/quantum-27.webp',
    text: 'To ensure accuracy and efficiency, we’ll begin with a FREE data sample and review of your project scope. This allows us to determine the best processing strategy, average processing time, turnaround time, accuracy level, and ideal staff profile for your project.',
  },
];
export const PricingSection1 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Center py={SIZE_CONFIG.SECTION_SPACE} mih="100vh" bg={COLOR.TURQUOISE}>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={0}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper
                  p="md"
                  style={{ borderColor: COLOR.TURQUOISE }}
                  h="100%"
                  w={MD ? 350 : 350}
                  radius={0}
                  withBorder
                  bg="#fff"
                >
                  <Stack h="100%">
                    <Text c={COLOR.TURQUOISE} ta="left">
                      {item.step}
                    </Text>
                    <AspectRatio ratio={6 / 5}>
                      <Image
                        mah="40vh"
                        radius="lg"
                        src={item.image}
                        alt="image"
                      />
                    </AspectRatio>
                    <Text c={COLOR.TURQUOISE} size="sm" lh={1.3} ta="left">
                      {item.text}
                    </Text>
                  </Stack>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Center>
    </>
  );
};
