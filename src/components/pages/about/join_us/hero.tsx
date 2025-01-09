import {
  BackgroundImage,
  Button,
  Grid,
  Group,
  Input,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconMapPin, IconSearch } from '@tabler/icons-react';

export const JoinUsHero = () => {
  return (
    <>
      <BackgroundImage mah='90vh' src='/join_us.jpeg'>
        <Stack p='xl' justify="center">
          <Grid columns={10}>
            <Grid.Col span={{ base: 10, md: 7 }}>
              <Stack justify="space-evenly" h="100vh">
                <Stack>
                  <Title size='5vw'>
                    Quantum <br /> for Everyone
                  </Title>
                  <Text size='2vw'>Find your next job at Neocosmicx</Text>
                </Stack>
                <Group>
                  <Input
                    title="Role"
                    size='md'
                    placeholder="Quantum Engineer"
                    leftSection={<IconSearch />}
                  />
                  <Input
                    size='md'
                    title="Where?"
                    placeholder="Los Angeles"
                    leftSection={<IconMapPin />}
                  />
                  <Button size='md' radius="xl">Search</Button>
                </Group>
              </Stack>
            </Grid.Col>

          </Grid>
        </Stack>
      </BackgroundImage>
    </>
  );
};
