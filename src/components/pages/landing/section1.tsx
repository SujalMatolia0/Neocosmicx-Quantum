import {
  Center,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import Image from 'next/image';
import { CommonButton } from '@/components/indie/common_button';
import { useMediaQuerys } from '@filante/cobalt/hooks';

const DATA = [
  {
    logo: '',
  },
  {
    logo: '',
  },
  {
    logo: '',
  },
  {
    logo: '',
  },
  {
    logo: '',
  },
  {
    logo: '',
  },
  {
    logo: '',
  },
  {
    logo: '',
  },
  {
    logo: '',
  },
];

export const LandingSection1 = () => {
  const autoplay = useRef(Autoplay({ delay: 800 }));
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        bg={COLOR.TURQUOISE}
        gap="lg"
        py={SIZE_CONFIG.SECTION_SPACE}
        mih="100vh"
      >
        <Carousel
          py="xl"
          loop
          withControls={false}
          height={200}
          slideSize="15%"
          align="start"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Carousel.Slide>
                  <Image src={item.logo} width={200} height={200} alt="logo" />
                </Carousel.Slide>
              </>
            ))
          )}
        </Carousel>

        <SimpleGrid px={MD ? '140' : 'xs'} cols={{ base: 1, md: 2 }}>
          <Group></Group>
          <Stack pl={MD ? '80' : 'xs'}>
            <Paper
              bg={COLOR.GREEN}
              h={150}
              w={150}
              radius="50%"
              style={{
                rotate: '35deg',
              }}
            >
              <Center h="100%">
                <Text ta="left" c={COLOR.TURQUOISE} maw={80}>
                  Quantum computing Training
                </Text>
              </Center>
            </Paper>
            <Title c={COLOR.PEACH}>
              Our customized program on Quantum computing provides a uniques
              opportunity to empower, retain, and advance your talent.
            </Title>
            <Text c={COLOR.PEACH}>
              We are the first who provides Quantum computing with fully
              integrated platform to support and work faster, smarter and give
              global recognition to researcher.
            </Text>
            <Text c={COLOR.PEACH}>
              Our platform is to keep your learning faster, easy productive.
            </Text>
          </Stack>
        </SimpleGrid>
        <Group pt="xl" justify="center" gap="xl">
          <CommonButton title="Enroll Now!!" color={COLOR.PEACH} />
          <CommonButton title="Start Learning" />
        </Group>
      </Stack>
    </>
  );
};
