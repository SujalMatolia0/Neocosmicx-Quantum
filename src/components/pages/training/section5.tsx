import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  Badge,
  Button,
  Container,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';
const DATA = [
  {
    color: '#b5e9fb',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
  {
    color: '#b5e9fb',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
  {
    color: '#b5e9fb',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
  {
    color: '#b5e9fb',
    badge: 'Digital Training',
    title:
      'Develop your generative Quantum career with training content by our expert.',
    button: 'Explore',
  },
];
export const TrainingSection5 = () => {
  return (
    <>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Image src="/quantum-25.avif" alt="image" />
          <Stack justify="center">
            <Title>What people are saying</Title>
            <Text>
              Find out what learners and leaders are saying about the
              transformative impact of building AWS Cloud skills.
            </Text>
            <Button w="fit-content" variant="outline">
              Know More
            </Button>
          </Stack>
        </SimpleGrid>
        <SimpleGrid py={SIZE_CONFIG.SECTION_SPACE} cols={{ base: 1, md: 2 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper bg={item.color} mih="60vh">
                  <Stack p="md" h="100%" justify="space-between">
                    <Badge color={COLOR.GREEN}>{item.badge}</Badge>
                    <Stack>
                      <Title size="2vw" maw={500} c={COLOR.GRAY}>
                        {item.title}
                      </Title>
                      <CommonButton
                        variant="outline"
                        title={item.button || 'Explore Further'}
                      />
                    </Stack>
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
