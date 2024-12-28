import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Container,
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
    title: 'Benefits',
    text: 'llorjfd kasksd kdormnsd ksdfiins k',
  },
  {
    title: 'Benefits',
    text: 'llorjfd kasksd kdormnsd ksdfiins k',
  },
  {
    title: 'Benefits',
    text: 'llorjfd kasksd kdormnsd ksdfiins k',
  },
  {
    title: 'Benefits',
    text: 'llorjfd kasksd kdormnsd ksdfiins k',
  },
];

export const MembershipSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Container mih="100vh" size="xl">
        <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
          <Title>Why Become an CVRCQRD Member?</Title>
          <Text ta="center" maw={700}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            sapiente cumque praesentium natus maxime. Id, sint. Voluptatibus
            laudantium et perspiciatis ullam consectetur ea soluta maxime error?
            Voluptatem dolores voluptate similique.
          </Text>
        </Stack>
        <Stack
          py={SIZE_CONFIG.SECTION_SPACE}
          justify="center"
          p="md"
          align="center"
          mih={MD ? '60vh' : '60vh'}
        >
          <SimpleGrid cols={{ base: 1, md: 4 }}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Paper
                    style={{
                      borderRadius: '10px',
                      borderColor: COLOR.TURQUOISE,
                    }}
                    mih={MD ? '30vh' : '60vh'}
                    w={MD ? 250 : 350}
                    radius={0}
                    p="md"
                    withBorder
                    bg="white"
                  >
                    <Stack align="center">
                      <Image alt="image" radius="lg" src="/quantum-27.webp" />
                      <Title>{item.title}</Title>
                      <Text ta="center">{item.text} </Text>
                    </Stack>
                  </Paper>
                </>
              ))
            )}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
};
