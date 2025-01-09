import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  Badge,
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';
const DATA = [
  {
    badge: 'role',
    title: 'Cloud',
    text: 'Learn cloud fundamentals and best practices',
    button: 'Explroe',
  },
  {
    badge: 'role',
    title: 'Cloud',
    text: 'Learn cloud fundamentals and best practices',
    button: 'Explroe',
  },
  {
    badge: 'role',
    title: 'Cloud',
    text: 'Learn cloud fundamentals and best practices',
    button: 'Explroe',
  },
];
export const TrainingSection2 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <Group align="end">
          <Title>Get Started with training by role or domain</Title>
          <Button>Explore</Button>
        </Group>

        <SimpleGrid py={SIZE_CONFIG.SECTION_SPACE} cols={{ base: 1, md: 3 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper mih="40vh" p="md" withBorder>
                  <Stack h="100%" justify="space-between">
                    <Stack>
                      <Badge color={COLOR.GREEN}>{item.badge}</Badge>
                      <Stack gap={0}>
                        <Title lh={0.8}>{item.title}</Title>
                        <Text maw={300} c="dimmed">
                          {item.text}
                        </Text>
                      </Stack>
                    </Stack>
                    <Button w="fit-content">{item.button}</Button>
                  </Stack>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
