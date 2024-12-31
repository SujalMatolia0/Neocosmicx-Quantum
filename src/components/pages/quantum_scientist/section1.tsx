import { COLOR } from '@/configs/theme';
import { Stack, SimpleGrid, Button, Text } from '@mantine/core';
import { Children } from 'react';
import { IconChevronRight } from '@tabler/icons-react';

const DATA = [
  { button: 'Exam Details' },
  { button: 'Exam INformation' },
  { button: 'Exam Guide' },
  { button: 'Book of knowledge' },
  { button: 'Exam Structure' },
  { button: 'For Organizations' },
];

export const QuantumScientistSection1 = () => {
  return (
    <>
      <Stack align="center" justify="center" bg={COLOR.GRAY} mih="90vh">
        <SimpleGrid spacing="100" cols={{ base: 1, md: 2 }}>
          <Stack>
            <Text ml="auto" maw="500px" ta="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus maiores mollitia omnis fugit dolor rerum, laudantium
              ad nostrum delectus cumque atque dolorum, consequuntur nobis
              tempore ducimus quibusdam odio fugiat? Ratione?
            </Text>
            <Text ml="auto" maw="500px" ta="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus maiores mollitia omnis fugit dolor rerum, laudantium
              ad nostrum delectus cumque atque dolorum, consequuntur nobis
              tempore ducimus quibusdam odio fugiat? Ratione?
            </Text>
          </Stack>
          <Stack justify="center">
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Button
                    fullWidth
                    justify="space-between"
                    rightSection={<IconChevronRight />}
                    variant="transparent"
                  >
                    {item.button}                  </Button>
                </>
              ))
            )}
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  );
};
