import { COLOR } from '@/configs/theme';
import { BackgroundImage, Button, Stack, Text, Title } from '@mantine/core';

export const QuantumEngineerHero = () => {
  return (
    <>
      <BackgroundImage mih="100vh" src="/quantum-26.avif">
        <Stack justify="center" align="center" h="80vh">
          <Title c={COLOR.GREEN}>CVRCQRD Certified Quantum Engineer</Title>
          <Text ta="center" c={COLOR.TURQUOISE} maw={700}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            eveniet ut quod aliquam possimus! Debitis aspernatur quibusdam quod
            ab culpa quam quo dolorem omnis sint eum voluptatem, fugit
            necessitatibus nostrum.
          </Text>
          <Button>Join The Program</Button>
        </Stack>
      </BackgroundImage>
    </>
  );
};
