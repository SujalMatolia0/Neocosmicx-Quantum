import { SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
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
    image: '/newgirl1.png',
    name: 'Taniya Johns',
    role: 'UAE',
  },
  {
    image: '/newboy1.png',
    name: 'Akshay Jain',
    role: 'India',
  },
  {
    image: '/newgirl2.png',
    name: 'Melina Roberts',
    role: 'Australia',
  },
  {
    image: '/newboy2.png',
    name: 'Alexander',
    role: 'Germany',
  },
  {
    image: '/newgirl3.png',
    name: 'Hasina Sheikh',
    role: 'Israel',
  },
];
export const ChapterSection4 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        py={SIZE_CONFIG.SECTION_SPACE}
        align="center"
        justify="space-between"
      >
        <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
          <Title size="5vh">Our Star Quantum Global Fellows</Title>
          <Text ta="center" c="dimmed" size="1.9vh" maw={800}>
            A global community of over 500+ remarkable individuals who are
            collaborating in Quantum Computing to spark future-shaping change.
          </Text>
        </Stack>
        <SimpleGrid px="md" cols={{ base: 1, md: 4 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Stack gap={1}>
                  <Center>
                    <AspectRatio ratio={10 / 11}>
                      <Image
                        radius="lg"
                        alt="image"
                        maw={MD ? 250 : 300}
                        src={item.image}
                      />
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
      </Stack>
    </>
  );
};
