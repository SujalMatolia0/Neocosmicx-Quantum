import { Group, SimpleGrid, Stack, Text, Image, Title } from "@mantine/core";
import { COLOR, SIZE_CONFIG } from "@/configs/theme";
import { CommonButton } from "@/components/indie/common_button";
import { useMediaQuerys } from "@filante/cobalt/hooks";

export const ChapterSection3 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        justify="space-between"
        gap="lg"
        py={SIZE_CONFIG.SECTION_SPACE}
        mih="70vh"
      >
        <SimpleGrid px={MD ? "140" : "xs"} cols={{ base: 1, md: 2 }}>
          <Stack pl={MD ? "80" : "xs"} justify="center">
            <Text size="xl" c={COLOR.GREEN}>
                 Our Purpose
            </Text>
            <Title c={COLOR.TURQUOISE}>
              What makes a Neocosmicx Quantum Chapter?
            </Title>
            <Text size="1vm">
              With chapters spanning across key cities and regions worldwide,
              Neocosmicx offers the perfect balance of global reach and local
              focus. Whether you're in Silicon Valley, Bangalore, Berlin, Tokyo,
              or anywhere in between, there’s a Neocosmicx Chapter ready to
              welcome you. At Neocosmicx, we believe that local action fuels
              global progress. By joining or starting a chapter, you’ll play an
              active role in driving quantum innovation, making connections, and
              shaping the future of technology in your region.
            </Text>
          </Stack>
          <Group>
            <Image radius="lg" alt="pic" src="/newgirlfellow.jpg" />
          </Group>
        </SimpleGrid>
        <Group pt="xl" justify="center" gap="xl">
        </Group>
      </Stack>
    </>
  );
};
