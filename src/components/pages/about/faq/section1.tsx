import { SIZE_CONFIG } from '@/configs/theme';
import {
  Button,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Title,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { Children } from 'react';
import { FaqSection2 } from './section2';

const DATA = [
  {
    text: 'Embedding Your Media',
  },
  {
    text: 'Wistia Billing Overview',
  },
  {
    text: 'Managing the files in your Wistia Account',
  },
  {
    text: 'Account Setting',
  },
];

export const FaqSection1 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} mih="100vh" size="xl">
        <Paper withBorder p="md">
          <Stack miw="80%">
            <Title>Top Article</Title>
            <SimpleGrid cols={{ base: 1, md: 2 }}>
              {Children.toArray(
                DATA.map((item) => (
                  <>
                    <Group>
                      <Button
                        fullWidth
                        justify="space-between"
                        rightSection={<IconChevronRight />}
                        variant="transparent"
                      >
                        {item.text}
                      </Button>
                    </Group>
                  </>
                ))
              )}
            </SimpleGrid>
          </Stack>
        </Paper>
        <FaqSection2 />
      </Container>
    </>
  );
};
