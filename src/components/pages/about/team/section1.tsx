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
      image: '/shweta.png',
      name: 'Shweta P',
      title: 'CEO',
    },
    {
      image: '/abizer.png',
      name: 'Abizer S',
      title: 'CTO',
    },
    {
      image: '/mohit.png',
      name: 'Mohit M',
      title: 'Full Stack Developer',
    },
    {
      image: '/sejan.png',
      name: 'Sejan Khan',
      title: 'Python Developer',
    },
    {
      image: '/monika.png',
      name: 'Monika S',
      title: 'Quantum Engineer',
    },
    {
      image: '/noorul.png',
      name: 'Noor-ul H',
      title: 'Frontend Developer',
    },
    {
      image: '/sujal.png',
      name: 'Sujal M ',
      title: 'Backend Developer',
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
                  <AspectRatio ratio={11 / 13}>
                    <Image radius='lg' alt="image" maw={200} src={item.image} />
                  </AspectRatio>
                </Center>

                <Group p="md" justify="space-evenly" align="start">
                  <Stack gap={2}>
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
