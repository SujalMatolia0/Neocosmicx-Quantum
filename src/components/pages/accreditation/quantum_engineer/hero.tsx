import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  AspectRatio,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export const QuantumEngineerHero = () => {
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
          <Title>
            Certified Quantum <br /> Engineer
          </Title>
          <Text>
            Get hands-on experience with quantum computing in PennyLane–from
            quantum chemistry to quantum machine learning–using our exclusive
            coding challenges.
          </Text>
        </Stack>
        {MD ? (
          <AspectRatio ratio={14 / 14}>
            <Image radius="lg" src="/accredation_engineer.jpeg" alt="image" />
          </AspectRatio>
        ) : null}
      </SimpleGrid>
    </>
  );
};
