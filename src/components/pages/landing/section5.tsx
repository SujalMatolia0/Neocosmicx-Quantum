import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  AspectRatio,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Sustainability',
    description: 'Developing sustainable quantum technologies for the future',
  },
  {
    image: 'https://picsum.photos/200/301',
    title: 'Excellence',
    description: 'Striving for the highest standards of quality and precision',
  },
  {
    image: 'https://picsum.photos/200/302',
    title: 'Integrity',
    description: 'Upholding ethical principles and transparent practices',
  },
];

const LOGO = [
  {
    image: 'https://picsum.photos/200/300',
  },
  {
    image: 'https://picsum.photos/200/300',
  },
  {
    image: 'https://picsum.photos/200/300',
  },
];

export const LandingSection5 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        bg={COLOR.TURQUOISE}
        align="center"
        mih="100vh"
        py={SIZE_CONFIG.SECTION_SPACE}
        gap="xl"
      >
        <Title c={COLOR.GREEN} ta="center">
          Our Core Values
        </Title>
        <Group>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Stack align="center">
                  <AspectRatio>
                    <Image
                      radius="lg"
                      h={200}
                      w={300}
                      src={item.image}
                      alt="pic"
                    />
                  </AspectRatio>
                  <Title c={COLOR.GREEN} ta="center" order={2}>
                    {item.title}
                  </Title>
                  <Text c={COLOR.PEACH} ta="center" size="sm">
                    {item.description}
                  </Text>
                </Stack>
              </>
            ))
          )}
        </Group>
        <CommonButton color={COLOR.PEACH} title="Get in touch" />

        <Space h="xl" />
        <SimpleGrid spacing={0} cols={{ base: 1, md: 4 }}>
          <Paper
            style={{ borderColor: COLOR.GREEN }}
            h={120}
            w={MD ? 250 : 350}
            radius={0}
            withBorder
            bg="transparent"
          >
            test
          </Paper>
          {Children.toArray(
            LOGO.map((item) => (
              <>
                <Paper
                  style={{ borderColor: COLOR.GREEN }}
                  h={120}
                  w={MD ? 250 : 350}
                  radius={0}
                  withBorder
                  bg="transparent"
                >
                  <Image
                    h={120}
                    w={MD ? 250 : 350}
                    src={item.image}
                    alt="logo"
                  />
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Stack>
    </>
  );
};
