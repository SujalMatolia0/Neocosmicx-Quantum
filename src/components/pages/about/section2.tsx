import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  AspectRatio,
  Center,
  Group,
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
    No: '1',
    title: 'Client Consultations',
    text: 'Outline and align project scope.',
    image: '/q-ml.png',
  },
  {
    No: '1',
    title: 'Client Consultations',
    text: 'Outline and align project scope.',
    image: '/q-ml.png',
  },
  {
    No: '1',
    title: 'Client Consultations',
    text: 'Outline and align project scope.',
    image: '/q-ml.png',
  },
  {
    No: '1',
    title: 'Client Consultations',
    text: 'Outline and align project scope.',
    image: '/q-ml.png',
  },
  {
    No: '1',
    title: 'Client Consultations',
    text: 'Outline and align project scope.',
    image: '/q-ml.png',
  },
  {
    No: '1',
    title: 'Client Consultations',
    text: 'Outline and align project scope.',
    image: '/q-ml.png',
  },
];
export const AboutSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Center py={SIZE_CONFIG.SECTION_SPACE} mih="100vh" >
        <Stack align="center">
          <Title c={COLOR.TURQUOISE}>Our Process</Title>
          <Text maw={800} c={COLOR.TURQUOISE} ta="center">
            Our large and growing multinational team of consultants, managers,
            data specialists, and technologists is at the very heart of our
            success. We foster a culture of continuous learning and strive every
            day to exceed our clients’ expectations.
          </Text>
          <SimpleGrid miw="90vw" p="md" spacing={0} cols={{ base: 1, md: 3 }}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Paper
                    p="md"
                    bg="transparent"
                    style={{ borderColor: COLOR.TURQUOISE }}
                    radius={0}
                    withBorder
                    mih={140}
                  >
                    <Stack
                      justify="space-between"
                    >
                      <Group justify="end">
                        <AspectRatio ratio={2 / 2}>
                          <Image
                            mah={MD ? '4vw' : '15vw'}
                            src={item.image}
                            alt="image"
                          />
                        </AspectRatio>
                      </Group>
                      <Stack gap={1}>
                        <Text c={COLOR.TURQUOISE} size={MD ? '2vw' : '5vw'}>
                          {item.No}
                        </Text>
                        <Text c={COLOR.TURQUOISE}>{item.title}</Text>
                        <Text c={COLOR.TURQUOISE}>{item.text}</Text>
                      </Stack>
                    </Stack>
                  </Paper>
                </>
              ))
            )}
          </SimpleGrid>
        </Stack>
      </Center>
    </>
  );
};
