import { SIZE_CONFIG } from '@/configs/theme';
import {
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import {
  IconBrackets,
  IconCircle,
  IconCircleFilled,
  IconHome,
} from '@tabler/icons-react';
import { Children } from 'react';
const DATA = [
  {
    icon: <IconBrackets />,
    title: 'Accounting & Billing',
    author: 2,
    articles: 5,
  },
  {
    icon: <IconBrackets />,
    title: 'Accounting & Billing',
    author: 2,
    articles: 5,
  },
  {
    icon: <IconHome />,
    title: 'Accounting & Billing',
    author: 2,
    articles: 5,
  },
  {
    icon: <IconBrackets />,
    title: 'Accounting & Billing',
    author: 2,
    articles: 5,
  },
  {
    icon: <IconBrackets />,
    title: 'Accounting & Billing',
    author: 2,
    articles: 5,
  },
  {
    icon: <IconHome />,
    title: 'Accounting & Billing',
    author: 2,
    articles: 5,
  },
];

export const FaqSection2 = () => {
  return (
    <>
      <SimpleGrid p={SIZE_CONFIG.SECTION_SPACE} cols={{ base: 1, md: 3 }}>
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Paper p="xl" withBorder>
                <Group justify="space-between">
                  <ThemeIcon c="blue">{item.icon}</ThemeIcon>
                  <Stack>
                    <Text>{item.title}</Text>
                    <Text c="dimmed">
                      {item.author}authors <IconCircleFilled size={10} />{' '}
                      {item.articles}
                      articles
                    </Text>
                  </Stack>
                </Group>
              </Paper>
            </>
          ))
        )}
      </SimpleGrid>
    </>
  );
};
