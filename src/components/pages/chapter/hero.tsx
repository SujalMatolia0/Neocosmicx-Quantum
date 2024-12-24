import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Carousel } from '@mantine/carousel';
import { BackgroundImage, Stack, Text, Title } from '@mantine/core';
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
      <Carousel
        py={SIZE_CONFIG.SECTION_SPACE}
        mih="50vh"
        px={MD ? '100' : 'xs'}
      >
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Carousel.Slide mih="50vh">
                <BackgroundImage src={item.image}>
                  <Stack p="lg" mah="50vh" maw={500} align="start">
                    <Text size="xs" c={COLOR.GREEN}>
                      Directory
                    </Text>
                    <Title size="md" c={COLOR.GREEN}>
                      Step inside the TED Fellows community
                    </Title>
                    <Text c={COLOR.GREEN}>
                      Each year, a new group of TED Fellows from around the
                      world, and from every discipline, are welcomed into this
                      international community of remarkable thinkers and doers.
                    </Text>
                    <CommonButton title="Start Browsing" />
                  </Stack>
                </BackgroundImage>
              </Carousel.Slide>
            </>
          ))
        )}
      </Carousel>
    </>
  );
};
