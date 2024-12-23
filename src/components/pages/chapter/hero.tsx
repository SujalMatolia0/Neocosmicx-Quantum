import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Carousel } from '@mantine/carousel';
import {
  AspectRatio,
  BackgroundImage,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/quantum-25.avif',
  },
  {
    image: '/quantum-25.avif',
  },
  {
    image: '/quantum-25.avif',
  },
];
export const ChapterHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Carousel mih="100vh" px={MD ? '100' : 'xs'}>
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Carousel.Slide>
                <BackgroundImage src={item.image}>
                  <Text>Directory</Text>
                  <Title>Step inside the TED Fellows community</Title>
                  <Title>
                    Each year, a new group of TED Fellows from around the world,
                    and from every discipline, are welcomed into this
                    international community of remarkable thinkers and doers.
                  </Title>
                  <CommonButton title="Start Browsing" />
                </BackgroundImage>
              </Carousel.Slide>
            </>
          ))
        )}
      </Carousel>
    </>
  );
};
