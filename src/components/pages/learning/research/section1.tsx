import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  Badge,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconBrandYoutube } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    section: 'News',
    image: '/quantum-chip.jpeg',
    title: 'Quantum Computer',
    name: 'Noor-ul Hasan',
    date: '12 Dec 2024',
    badge: ['AI', 'Quantum'],
    icon: <IconBrandYoutube />,
  },
  {
    section: 'News',
    image: '/quantum-chip.jpeg',
    title: 'Quantum Computer',
    name: 'Noor-ul Hasan',
    date: '12 Dec 2024',
    badge: ['AI', 'Quantum'],
    icon: <IconBrandYoutube />,
  },
  {
    section: 'News',
    image: '/quantum-chip.jpeg',
    title: 'Quantum Computer',
    name: 'Noor-ul Hasan',
    date: '12 Dec 2024',
    badge: [{ list: 'AI' }, { list: 'Quantum' }],
    icon: <IconBrandYoutube />,
  },
];

export const ResearchSection1 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <SimpleGrid cols={3}>
          {Children.toArray(
            DATA.map((item) => (
              <Paper maw="25vw" mah="90vh" p="lg" withBorder>
                <Stack mih="70vh" justify="space-between">
                  <Stack>
                    <Group>
                      {item.icon}
                      <Text>{item.section}</Text>
                    </Group>
                    <Image src={item.image} alt="image" />
                    <Title lh={1}>{item.title}</Title>
                  </Stack>
                  <Stack>
                    <Stack gap={0}>
                      <Text size="sm" lh={0.9} fw="lighter">
                        {item.name}
                      </Text>
                      <Text size="sm" lh={0.9} fw="lighter">
                        {item.date}
                      </Text>
                    </Stack>
                    <Group>
                      {item.badge.map((badge) => {
                        const badgeText =
                          typeof badge === 'string' ? badge : badge.list;
                        return (
                          <Badge color={COLOR.GREEN} key={badgeText}>
                            {badgeText}
                          </Badge>
                        );
                      })}
                    </Group>
                  </Stack>
                </Stack>
              </Paper>
            ))
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
