import { Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const JoinUsSection2 = () => {
  return (
    <>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Image src="/quantum-25.avif" />
        <Stack>
          <Text>Teams</Text>
          <Title>Find your team</Title>
          <Text>
            Together, we create access to information and build products for
            everyone. Want to be a Googler? Find your team.
          </Text>
        </Stack>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Stack>
            <Title>Engineering & Tech</Title>
            <Text>
              Develop the products and tools of the future for billions of
              users.
            </Text>
          </Stack>
          <Stack>
            <Title>Engineering & Tech</Title>
            <Text>
              Develop the products and tools of the future for billions of
              users.
            </Text>
          </Stack>
        </SimpleGrid>
        <
      </SimpleGrid>
    </>
  );
};
