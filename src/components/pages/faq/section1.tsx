import {
  Anchor,
  Button,
  Container,
  Paper,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core';

export const FaqSection1 = () => {
  return (
    <>
      <Container size="xl">
        <Paper withBorder>
          <Stack>
            <Title>Top Article</Title>
            <SimpleGrid cols={{ base: 1, md: 2 }}>
              <Button>Embedding Your Media  </Button>
            </SimpleGrid>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};
