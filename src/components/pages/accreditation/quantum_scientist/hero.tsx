import { COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Stack, Title, Text, Image, SimpleGrid, AspectRatio } from '@mantine/core';

export const QuantumScientistHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <SimpleGrid
        py="xl"
        mah="100vh"
        px={MD ? '140' : 'xs'}
        cols={{ base: 1, md: 2 }}
      >
        <Stack py="xl">
          <Text size="xl" c={COLOR.GREEN}>
            Chartered Quantum Scientist
          </Text>
          <Title size="8vh">
            The Pinnacle of Quantum <br />
            Excellence
          </Title>
          <Text>
            The Chartered Quantum Scientist designation by Neocosmicx is the
            highest recognition of expertise, leadership, and innovation in the
            quantum computing field. This prestigious program is tailored for
            seasoned professionals, researchers, scientists, and academicians
            who are shaping the future of quantum technology and driving
            groundbreaking advancements in their fields. <br />
            <br />
            As a Chartered Quantum Scientist, you join an elite group of thought
            leaders who are defining the boundaries of what quantum computing
            can achieve, both theoretically and in real-world applications.
          </Text>
        </Stack>
        {MD ? (
          <AspectRatio ratio={14 / 14}>
            <Image radius="lg" src="/accredation_scientist.jpeg" alt="image" />
          </AspectRatio>
        ) : null}
      </SimpleGrid>
    </>
  );
};
