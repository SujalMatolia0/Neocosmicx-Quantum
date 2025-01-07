import { CommonButton } from "@/components/indie/common_button";
import { COLOR, SIZE_CONFIG } from "@/configs/theme";
import { useMediaQuerys } from "@filante/cobalt/hooks";
import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Group, Stack, Text, Title } from "@mantine/core";
import { Children } from "react";

const DATA = [
  {
    title: "Know More, Explore More, Implement More",
    text: "Connecting Quantum Innovators Across the Globe",
    description: " At Neocosmicx, we believe that quantum innovation knows no boundaries.Our Chapters bring together quantum enthusiasts, professionals, researchers, and organizations in cities and regions across the world to foster collaboration, learning, and growth within the quantum computing community.",
    image: "/chapter_hero.jpeg",
  },
  {
    title: "Know More, Explore More, Implement More",
    text: "Connecting Quantum Innovators Across the Globe",
    description: " At Neocosmicx, we believe that quantum innovation knows no boundaries.Our Chapters bring together quantum enthusiasts, professionals, researchers, and organizations in cities and regions across the world to foster collaboration, learning, and growth within the quantum computing community.",
    image: "/chapter_hero_1.jpeg",
  },
  {
    title: "Know More, Explore More, Implement More",
    text: "Connecting Quantum Innovators Across the Globe",
    description: " At Neocosmicx, we believe that quantum innovation knows no boundaries.Our Chapters bring together quantum enthusiasts, professionals, researchers, and organizations in cities and regions across the world to foster collaboration, learning, and growth within the quantum computing community.",
    image: "/chapter_hero_2.jpeg",
  },
];
export const ChapterHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Carousel loop
        py={SIZE_CONFIG.SECTION_SPACE}
        mih="50vh"
        px={MD ? "100" : "xs"}
      >
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Carousel.Slide>
                <BackgroundImage mih="70vh" src={item.image}>

                  <Stack p="lg" h="70vh" w="100%" justify="end" align="end">
                    <Text size="xs" c={COLOR.GREEN}>
                      {item.title}                    </Text>
                    <Title size="md" c={COLOR.GREEN}>
                      {item.text}                    </Title>
                    <Text ta='right' maw={700} c={COLOR.GREEN}>
                      {item.description}                    </Text>
                    <CommonButton title="Get Noticed" />
                  </Stack>
                </BackgroundImage>
              </Carousel.Slide >
            </>
          ))
        )}
      </Carousel >
    </>
  );
};
