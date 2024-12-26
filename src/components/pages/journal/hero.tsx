import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export const JournalHero = () => {
  return (
    <>
      <Container></Container>
      <Stack py={SIZE_CONFIG.SECTION_SPACE} px="8%" bg={COLOR.GRAY}>
        <Title>Journal(Q-Plus)</Title>
        <Text>
          An international peer-reviewed and refereed journal on Quantum.
        </Text>
      </Stack>
      <SimpleGrid mih="80vh" spacing="100" cols={{ base: 1, md: 2 }}>
        <Stack justify="center" ml="auto" maw="350px">
          <Text ta="right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            dolorem laboriosam minima tempora soluta in, saepe necessitatibus
            veniam aspernatur quas temporibus qui mollitia fuga? Aperiam
            temporibus placeat odit molestias sit.
          </Text>

          <Text ta="right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            dolorem laboriosam minima tempora soluta in, saepe necessitatibus
            veniam aspernatur quas temporibus qui mollitia fuga? Aperiam
            temporibus placeat odit molestias sit.
          </Text>
        </Stack>
        <Stack justify="center">
          <CommonButton variant="outline" title="Review Committee" />
          <CommonButton variant="outline" title="More details " />
        </Stack>
      </SimpleGrid>
    </>
  );
};
