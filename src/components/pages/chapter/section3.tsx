import {
  AspectRatio,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/noor.png',
    name: 'Noor-ul Hasan',
    role: 'Web Developer',
  },
  {
    image: '/noor.png',
    name: 'Noor-ul Hasan',
    role: 'Web Developer',
  },
  {
    image: '/noor.png',
    name: 'Noor-ul Hasan',
    role: 'Web Developer',
  },
  {
    image: '/noor.png',
    name: 'Noor-ul Hasan',
    role: 'Web Developer',
  },
  {
    image: '/noor.png',
    name: 'Noor-ul Hasan',
    role: 'Web Developer',
  },
  {
    image: '/noor.png',
    name: 'Noor-ul Hasan',
    role: 'Web Developer',
  },
];
export const ChapterSection3 = () => {
  return (
    <>
      <Stack align="center" mih="50vh">
        <Title>Fellows Directory</Title>
        <Text c="dimmed" maw={500}>
          A global community of over 500 remarkable individuals who are
          collaborating across disciplines to spark future-shaping change.
        </Text>
      </Stack>
      <SimpleGrid px="md" cols={{ base: 1, md: 5 }}>
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Stack gap={1}>
                <Center>
                  <AspectRatio ratio={10 / 10}>
                    <Image radius="lg" alt="image" maw={200} src={item.image} />
                  </AspectRatio>
                </Center>

                <Stack gap={1} align="center">
                  <Text ta="left" size="md">
                    {item.name}
                  </Text>
                  <Text c="dimmed" ta="left" size="sm">
                    {item.role}
                  </Text>
                </Stack>
              </Stack>
            </>
          ))
        )}
      </SimpleGrid>
    </>
  );
};
