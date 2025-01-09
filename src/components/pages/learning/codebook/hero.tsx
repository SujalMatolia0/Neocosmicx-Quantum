import { CommonButton } from '@/components/indie/common_button';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Group,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const CodeBookHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <SimpleGrid px={MD ? '140' : 'xs'} cols={{ base: 1, md: 2 }}>
        <Stack py="xl">
          <Title>Codebook</Title>
          <Text>
            Learn quantum computing with PennyLane — the leading tool for
            programming quantum computers. Explore a specific module or follow a
            guided path to build your skills step-by-step.
          </Text>
          <Input placeholder="Search" leftSection={<IconSearch />} />
          <Group>
            <CommonButton title="Open Code Map" />
            <CommonButton title="Browse Modules" />
          </Group>
        </Stack>
        {MD ? <Image radius="lg" src="/quantum-27.webp" alt="image" /> : null}
      </SimpleGrid>
    </>
  );
};
