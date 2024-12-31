import { Container, Grid, Stack, Text, Title } from '@mantine/core';

export const ResearchHero = () => {
  return (
    <>
      <Container mih="80vh">
        <Grid h="100%" columns={10}>
          <Grid.Col span={3}>
            <Text>
              IBM Granite AI models are open sourced for innovation, tailored
              for business, and optimized for scale.
            </Text>
          </Grid.Col>
          <Grid.Col span="auto">
            <Stack h="80vh" align="end" justify="end">
              <Title size="10vw">Granite</Title>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
