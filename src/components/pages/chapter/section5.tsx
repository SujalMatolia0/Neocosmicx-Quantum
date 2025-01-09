import { SIZE_CONFIG } from "@/configs/theme";
import { useMediaQuerys } from "@filante/cobalt/hooks";
import { Group, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { Children } from "react";

const DATA = [
  {
    no: "1",
    title: "Visionary Thinkers",
    text: " Individuals who are not just imagining the future but are actively building it through quantum computing and related fields.",
  },
  {
    no: "2",
    title: "Innovators and Makers",
    text: " Problem solvers who design, develop, and deploy groundbreaking solutions with a focus on real-world impact.",
  },
  {
    no: "3",
    title: "Multidisciplinary Leaders",
    text: " Professionals who are blending expertise from various disciplines—technology, science, art, education, and beyond—to create transformative solutions.",
  },
  {
    no: "4",
    title: "Collaborative Spirits",
    text: " Team players and networkers who value knowledge sharing and collaboration within a global community.",
  },
];

export const ChapterSection5 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
        <Title>Qualifications</Title>
        <Text maw={MD ? 700 : 300} ta="center">
          At Neocosmicx, we seek out the emerging leaders who are working on the
          ground to redefine possibilities and solve some of the world’s most
          complex challenges. We’re looking for the doers, thinkers, and
          creators—those who are shaping the future through innovation,
          determination, and a vision for impact. Whether you’re a quantum
          technologist, entrepreneur, scientist, educator, artist, researcher,
          or changemaker, your work and ideas can help drive the quantum
          revolution. Here&apos;s what we look for in a Neocosmicx Visionary:
        </Text>
        <SimpleGrid p="md" cols={{ base: 1, md: 2 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper p="md" withBorder maw={700}>
                  <Group align="start">
                    <Text>{item.no}</Text>
                    <Text maw={MD ? 550 : 280} fw="bold">
                      {item.title}
                      <Text span inherit fw="lighter">
                        {item.text}
                      </Text>
                    </Text>
                  </Group>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Stack>
    </>
  );
};
