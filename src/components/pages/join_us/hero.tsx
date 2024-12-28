import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Input,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconMapPin, IconSearch } from '@tabler/icons-react';

export const JoinUsHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Container mih="100vh" size="xl">
        <Stack h="100vh" justify="center">
          <Grid columns={10}>
            <Grid.Col span={{ base: 10, md: 7 }}>
              <Stack justify="space-evenly" h="100vh">
                <Stack>
                  <Title>
                    Build <br /> for Everyone
                  </Title>
                  <Text>Find your next job at CVRCQRD</Text>
                </Stack>
                <Group>
                  <Input
                    title="Role"
                    placeholder="Quantum Engineer"
                    leftSection={<IconSearch />}
                  />
                  <Input
                    title="Where?"
                    placeholder="Los Angeles"
                    leftSection={<IconMapPin />}
                  />
                  <Button radius="xl">Search</Button>
                </Group>
              </Stack>
            </Grid.Col>
            {MD ? (
              <Grid.Col span="auto">
                <Stack justify="center" align="center" h="80vh">
                  <Image alt="image" radius="50%" src="/quantum-chip.jpeg" />
                </Stack>
              </Grid.Col>
            ) : null}
          </Grid>
        </Stack>
      </Container>
    </>
  );
};
