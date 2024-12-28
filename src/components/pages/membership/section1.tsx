import { SIZE_CONFIG } from '@/configs/theme';
import {
  Container,
  SimpleGrid,
  Paper,
  Stack,
  Title,
  Text,
  Image,
  Button,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    image: '/quantum-chip.jpeg',
    title: 'Individual',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel animi earum, nisi enim accusamus nesciunt adipisci nostrum, facere ad veritatis? Cupiditate incidunt tempore deleniti cumque nostrum sint! Placeat, magnam!',
  },
  {
    image: '/quantum-chip.jpeg',
    title: 'Individual',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel animi earum, nisi enim accusamus nesciunt adipisci nostrum, facere ad veritatis? Cupiditate incidunt tempore deleniti cumque nostrum sint! Placeat, magnam!',
  },
  {
    image: '/quantum-chip.jpeg',
    title: 'Individual',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel animi earum, nisi enim accusamus nesciunt adipisci nostrum, facere ad veritatis? Cupiditate incidunt tempore deleniti cumque nostrum sint! Placeat, magnam!',
  },
];
export const MembershipSection1 = () => {
  return (
    <>
      <Container size="xl">
        <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
          <SimpleGrid cols={3}>
            {Children.toArray(
              DATA.map((item) => (
                <Paper maw="25vw" mah="90vh" p="lg" withBorder>
                  <Stack mih="70vh" justify="space-between">
                    <Stack>
                      <Image src={item.image} alt="image" />
                      <Title lh={1}>{item.title}</Title>
                      <Text fw="lighter">{item.text}</Text>
                    </Stack>
                    <Button
                      fullWidth
                      justify="space-between"
                      rightSection={<IconChevronRight />}
                      variant="transparent"
                    >
                      Learn More{' '}
                    </Button>
                  </Stack>
                </Paper>
              ))
            )}
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};
