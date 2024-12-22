import { COLOR } from '@/configs/theme';
import { Stack, Text, Title } from '@mantine/core';

export const CareersHero = () => {
  return (
    <>
      <Stack align="center">
        <Title c={COLOR.TURQUOISE}>Careers</Title>
        <Text c={COLOR.GREEN} ta="center" maw={700}>
          As we continue to innovate and expand into new service verticals and
          technologies, we are actively seeking talented and motivated
          individuals to join our team.
        </Text>
      </Stack>
    </>
  );
};
