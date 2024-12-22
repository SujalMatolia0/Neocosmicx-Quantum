import {
  AspectRatio,
  Center,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Children } from 'react';

export const TeamSection1 = () => {
  const DATA = [
    {
      image: '/noor.png',
      name: 'Noor-ul hasan ',
      title: 'Developer',
    },
    {
      image: '/noor.png',
      name: 'Noor-ul hasan ',
      title: 'Developer',
    },
    {
      image: '/noor.png',
      name: 'Noor-ul hasan ',
      title: 'Developer',
    },
    {
      image: '/noor.png',
      name: 'Noor-ul hasan ',
      title: 'Developer',
    },
    {
      image: '/noor.png',
      name: 'Noor-ul hasan ',
      title: 'Developer',
    },
    {
      image: '/noor.png',
      name: 'Noor-ul hasan ',
      title: 'Developer',
    },
    {
      image: '/noor.png',
      name: 'Noor-ul hasan ',
      title: 'Developer',
    },
  ];
  return (
    <>
      <SimpleGrid p="md" cols={{ base: 1, md: 4 }}>
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Stack gap={1}>
                <Center>
                  <AspectRatio ratio={10 / 8}>
                    <Image alt="image" maw={200} src={item.image} />
                  </AspectRatio>
                </Center>

                <Group p="md" justify="space-between" align="start">
                  <Stack>
                    <Text ta="left" size="md">
                      {item.name}
                    </Text>
                    <Text ta="left" size="sm">
                      {item.title}
                    </Text>
                  </Stack>
                  <IconArrowUpRight />
                </Group>
              </Stack>
            </>
          ))
        )}
      </SimpleGrid>
    </>
  );
};
