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
  return (
    <>
      <Stack bg={COLOR.TURQUOISE} gap="lg" py={SIZE_CONFIG.SECTION_SPACE} mih="100vh">
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

        <SimpleGrid px="140" cols={2}>
          <Group></Group>
          <Stack pl="80">
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
                <Text c={COLOR.TURQUOISE} maw={80}>
                  jklasdak sk jsdna;sjd;oi
                </Text>
              </Center>
            </Paper>
            <Title c={COLOR.PEACH}>
              TechSpeed, a leader in data processing solutions since 2002,
              offers a complete suite of outsourcing solutions.
            </Title>
            <Text c={COLOR.PEACH}>
              We are the first BPO that combines AI technology with fully
              integrated human support to help firms of all sizes work faster,
              smarter, and cheaper leveraging US-based project management and
              global production teams.
            </Text>
            <Text c={COLOR.PEACH}>
              Our goal is to keep your costs low, quality high, and customers
              satisfied.
            </Text>
          </Stack>
        </SimpleGrid>
        <Group pt="xl" justify='center' gap="xl">
            <CommonButton title='hisdas' color={COLOR.PEACH} /><CommonButton title='sadba' />
        </Group>
      </Stack>
    </>
  );
};
