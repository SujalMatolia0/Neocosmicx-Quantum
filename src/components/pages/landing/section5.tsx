import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  AspectRatio,
  Center,
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
    image: '/empower.jpeg',
    title: 'Empower',
    description: 'Researcher, developers and enterprises by providing accessible and intuitive quantum computing tools.  ',
  },
  {
    image: '/accelerate.jpeg',
    title: 'Accelerate',
    description: 'Innovation through seamless integration and domain specific applications.',
  },
  {
    image: '/democratize.jpeg',
    title: 'Democratize',
    description: 'Quantum Computing to solve real world challenges across industries.',
  },
];

const LOGO = [
  {
    text: 'Q-ML',
    image: '/q-ml.png',
  },
  {
    text: 'Q-Space',
    image: '/q-space.png',
  },
  {
    text: 'Q-Sim',
    image: '/q-sim.png',
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
          Our Mission
        </Title>
        <Group>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Stack mih={350} align="center">
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
                  <Text maw={300} c={COLOR.PEACH} ta="center" size="sm">
                    {item.description}
                  </Text>
                </Stack>
              </>
            ))
          )}
        </Group>
        <CommonButton color={COLOR.PEACH} href='/contact' title="Get in touch" />

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
            <Center h="100%">
              <Text size={MD ? '2vw' : '11vw'} c={COLOR.PEACH} ta="center">
                Our Services
              </Text>
            </Center>
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
                  <Center h="100%">
                    <Group p="sm" justify="space-around">
                      <AspectRatio ratio={2 / 2}>
                        <Image
                          mah={MD ? '3vw' : '15vw'}
                          src={item.image}
                          alt="image"
                        />
                      </AspectRatio>
                      <Text
                        size={MD ? '2vw' : '10vw'}
                        c={COLOR.PEACH}
                        ta="center"
                      >
                        {item.text}
                      </Text>
                    </Group>
                  </Center>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Stack>
    </>
  );
};
