import { SIZE_CONFIG } from '@/configs/theme';
import { Button, Container, Group, Stack, Text, Title } from '@mantine/core';

export const TrainingHero = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} mih="100vh" size="xl">
        <Stack h="100%" justify="end">
          <Title>Training and Certification</Title>
          <Text>
            Cloud Skills and credentials that fuel innovation, acceleration
            impact, and changes lives
          </Text>
          <Group>
            <Button>Explore</Button>
            <Button>Develop Team</Button>
          </Group>
        </Stack>
      </Container>
    </>
  );
};
