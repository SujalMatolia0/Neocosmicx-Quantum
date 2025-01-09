import { CommonButton } from '@/components/indie/common_button';
import { SIZE_CONFIG } from '@/configs/theme';
import {
  AspectRatio,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export const JoinUsSection2 = () => {
  return (
    <>
      <Container mih="100vh" size="lg" py={SIZE_CONFIG.SECTION_SPACE}>
        <SimpleGrid h="100%" cols={{ base: 1, md: 2 }}>
          <AspectRatio ratio={11 / 8}>

            <Image mih='60vh' radius="lg" alt="image" m="auto" src="/find_team.jpeg" />
          </AspectRatio>
          <Stack>
            <Text>Teams</Text>
            <Title>Find your team</Title>
            <Text size="md">
              Together, we create access to information and build products for
              everyone. Want to be a Googler? Find your team.
            </Text>
            <SimpleGrid cols={{ base: 1, md: 2 }}>
              <Stack>
                <Title size="lg">Engineering & Tech</Title>
                <Text size="md">
                  Develop the products and tools of the future for billions of
                  users.
                </Text>
                <Title size="lg">Engineering & Tech</Title>
                <Text size="md">
                  Develop the products and tools of the future for billions of
                  users.
                </Text>
              </Stack>
              <Stack>
                <Title size="lg">Engineering & Tech</Title>
                <Text size="md">
                  Develop the products and tools of the future for billions of
                  users.
                </Text>
                <Title size="lg">Engineering & Tech</Title>
                <Text size="md">
                  Develop the products and tools of the future for billions of
                  users.
                </Text>
              </Stack>
            </SimpleGrid>
            <CommonButton title="View all teams" href='/team' />
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
