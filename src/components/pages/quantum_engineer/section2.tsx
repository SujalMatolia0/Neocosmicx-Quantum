import { SIZE_CONFIG, COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Container,
  SimpleGrid,
  Paper,
  Stack,
  Center,
  AspectRatio,
  Text,
  Image,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
  {
    image: '/noor.png',
    title: 'Quantum Cloud Roles',
    text: 'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.',
  },
];

export const QuantumEngineerSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="lg">
        <SimpleGrid cols={3}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper mih="60vh" p={0} bg={COLOR.PEACH}>
                  <Stack h="90%" justify="space-between" gap="md">
                    <Center>
                      <AspectRatio ratio={17 / 10}>
                        <Image
                          p={0}
                          radius="lg"
                          alt="image"
                          maw={MD ? 400 : 300}
                          src={item.image}
                        />
                      </AspectRatio>
                    </Center>
                    <Stack gap={1} align="center">
                      <Text ta="left" size="md">
                        {item.title}
                      </Text>
                      <Text c="dimmed" ta="center" size="sm">
                        {item.text}
                      </Text>
                    </Stack>
                  </Stack>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Container>{' '}
    </>
  );
};
