import { COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Button, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const CodeBookSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        justify="center"
        bg={COLOR.GRAY}
        align="center"
        mih={MD ? '50vh' : '60vh'}
      >
        <Title ta="center">New Codebook content</Title>
        <Text ta="center">
          Here&apos;s the latest to help you navigate your quantum journey.
        </Text>
        <SimpleGrid cols={{ base: 1, md: 3 }}>
          <Button>Quantum Fault Tolerance Path</Button>
          <Button>Quantum Fault Tolerance Path</Button>
          <Button>Quantum Fault Tolerance Path</Button>
        </SimpleGrid>
      </Stack>
    </>
  );
};
