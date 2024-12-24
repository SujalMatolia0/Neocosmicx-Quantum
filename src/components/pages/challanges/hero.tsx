import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  SimpleGrid,
  Stack,
  Title,
  Input,
  Group,
  Text,
  Image,
  Button,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const ChallengesHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <SimpleGrid
        // py={SIZE_CONFIG.SECTION_SPACE}
        mah="100vh"
        px={MD ? '140' : 'xs'}
        cols={{ base: 1, md: 2 }}
      >
        <Stack py="xl">
          <Title>Coding Challenges</Title>
          <Text>
            Get hands-on experience with quantum computing in PennyLane–from
            quantum chemistry to quantum machine learning–using our exclusive
            coding challenges.
          </Text>
          <Input placeholder="Search" leftSection={<IconSearch />} />
          <Text>Choose a category</Text>
          <Group>
            <Button>All Challenges</Button>
            <Button>Getting Started</Button>
            <Button>Algorithms</Button>
            <Button>Error Corrections</Button>
            <Button>quantum Chemistry</Button>
            <Button>quantum Circuit</Button>
            <Button>quantum Information</Button>
            <Button>quantum ML</Button>
          </Group>
        </Stack>
        {MD ? <Image radius="lg" src="/quantum-27.webp" alt="image" /> : null}
      </SimpleGrid>
    </>
  );
};
