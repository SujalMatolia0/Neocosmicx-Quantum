import { COLOR } from "@/configs/theme";
import { useMediaQuerys } from "@filante/cobalt/hooks";
import { AspectRatio, Image, SimpleGrid, Stack, Text, Title, } from "@mantine/core";

export const QuantumBoffinHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <SimpleGrid
        py="xl"
        mah="100vh"
        px={MD ? "140" : "xs"}
        cols={{ base: 1, md: 2 }}
      >
        <Stack py="xl">
            <Text size="xl" c={COLOR.GREEN}>
              Quantum Innovator Program
            </Text>
          <Title size="8vh">
            Be The Face of <br /> Quantum Innovation
          </Title>
          <Text size="2vh">
            The Quantum Innovator Program by Neocosmicx is a prestigious
            initiative designed to recognize, empower, and amplify individuals
            who are passionate about quantum computing. As a Quantum Innovator,
            you become an ambassador for the quantum revolution, advocating for
            quantum education, development, and adoption in your community and
            beyond. <br /><br />This program is a platform for those who are not only
            advancing their own expertise but are also committed to making
            quantum computing accessible and impactful for everyone.
          </Text>
        </Stack>
        {MD ? (<>
        <AspectRatio ratio={14 / 14}>
          <Image radius="lg" src="/innovator_accredation.png" alt="image" />
        </AspectRatio>
        </>
        ) : null}
      </SimpleGrid>
    </>
  );
};
