import { CommonButton } from '@/components/indie/common_button';
import { CommonSectionCard } from '@/components/indie/common_section_card';
import { COLOR } from '@/configs/theme';
import { Carousel } from '@mantine/carousel';
import { Stack, Title } from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    title: '',
    description: '',
    writer: '',
    position: '',
  },
];

export const LandingSection7 = () => {
  return (
    <>
      <Stack mih="60vh" align="center">
        <Title c={COLOR.TURQUOISE} fw={300}>
          From our Partners
        </Title>

        <Carousel loop withControls slideSize="40%" align="center">
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Carousel.Slide>
                  <CommonSectionCard title={item.title} description={item.description} position={item.position} writer={item.writer}  />
                </Carousel.Slide>
              </>
            ))
          )}
        </Carousel>

        <CommonButton title='View more testimonial' />
      </Stack>
    </>
  );
};
