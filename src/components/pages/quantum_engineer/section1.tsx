import { ActionIcon, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { ICON_SIZE } from '@filante/cobalt';

const timelineData = [
  {
    date: '15 January 2025',
    description: 'Announcement of the second stage results',
  },
  {
    date: '16 January 2025',
    description: 'Appeal process',
  },
  {
    date: '17 January 2025',
    description: "Announcement of the Open Day for the Bachelor's track and Master's track",
  },
  {
    date: '18 January 2025',
    description: "Announcement of the Open Day for the Bachelor's track and Master's track",
  },
];

export const QuantumEngineerSection1 = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null); // Reference to the carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollNext = () => {
    if (currentSlide < timelineData.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust scroll distance as per carousel size
    }
  };

  const scrollPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust scroll distance as per carousel size
    }
  };

  return (
    <>
      <Stack bg={COLOR.TURQUOISE} p="xl" justify="center" my={SIZE_CONFIG.SECTION_SPACE} mih="50vh">
        <Group mt="md">
          <Title c={COLOR.GREEN}>Exam Overview</Title>
          <ActionIcon
            color={COLOR.GREEN}
            variant="outline"
            radius="50%"
            onClick={scrollPrev}
            disabled={currentSlide === 0} // Disable button at the start
            style={{
              opacity: currentSlide === 0 ? 0.4 : 1,
              cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
              borderColor: currentSlide === 0 ? COLOR.GRAY : COLOR.GREEN,
            }}
          >
            <IconArrowLeft color={currentSlide === 0 ? COLOR.GRAY : COLOR.GREEN} size={ICON_SIZE.SM} />
          </ActionIcon>
          <ActionIcon
            color={COLOR.GREEN}
            variant="outline"
            radius="50%"
            onClick={scrollNext}
            disabled={currentSlide === timelineData.length - 1} // Disable button at the end
            style={{
              opacity: currentSlide === timelineData.length - 1 ? 0.4 : 1,
              cursor: currentSlide === timelineData.length - 1 ? 'not-allowed' : 'pointer',
              borderColor: currentSlide === timelineData.length - 1 ? COLOR.GRAY : COLOR.GREEN,
            }}
          >
            <IconArrowRight color={currentSlide === timelineData.length - 1 ? COLOR.GRAY : COLOR.GREEN} size={ICON_SIZE.SM} />
          </ActionIcon>
        </Group>
        <Text maw={800} c={COLOR.PEACH}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam maiores, delectus odit nobis earum id sunt repudiandae dolorem velit, et eius deserunt culpa ipsa possimus ad eligendi minus incidunt.</Text>
        <Carousel pt='xl'
          slideSize="33.3333%"
          slideGap="md"
          align="start"
          withControls={false}
          // getEmblaApi={(api) => (carouselRef.current = api?.containerNode())} // Set the carousel container node
          initialSlide={currentSlide}
        >
          {timelineData.map((item, index) => (
            <Carousel.Slide key={index}>
              <Stack>
                <Text size="sm" c={COLOR.GREEN}>
                  {item.date}
                </Text>
                <Divider size="xs" color={COLOR.PEACH} />
                <Text size="sm" c={COLOR.GRAY}>
                  {item.description}
                </Text>
              </Stack>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </>
  );
};
