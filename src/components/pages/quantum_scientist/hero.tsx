import { SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Stack,
  Title,
  Text,
  Image,
  SimpleGrid,
} from '@mantine/core';

export const QuantumScientistHero = () => {
  const { MD } = useMediaQuerys()
  return (
    <>
      <SimpleGrid py={SIZE_CONFIG.SECTION_SPACE}
        mah="100vh"
        px={MD ? '140' : 'xs'}
        cols={{ base: 1, md: 2 }}
      >
        <Stack py="xl">
          <Title>Charted Quantum<br />Scientist</Title>
          <Text>
            Get hands-on experience with quantum computing in PennyLane–from
            quantum chemistry to quantum machine learning–using our exclusive
            coding challenges.
          </Text>
        </Stack>
        {MD ? <Image radius="lg" src="/accredation_scientist.jpeg" alt="image" /> : null}
      </SimpleGrid >
    </>
  );
};
