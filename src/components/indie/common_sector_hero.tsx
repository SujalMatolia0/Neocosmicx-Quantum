import { SIZE_CONFIG } from '@/configs/theme';
import {
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

interface Props {
  section: string;
  page: string;
  text: string;
}

export const CommonSectorHero = (props: Props) => {
  return (
    <>
      <Container size="lg">
        <SimpleGrid
          py={SIZE_CONFIG.SECTION_SPACE}
          mih="60vh"
          cols={{ base: 1, md: 2 }}
        >
          <Stack h="100%" justify="end">
            <Button w="fit-content">{props.section}</Button>
            <Title>{props.page}</Title>
          </Stack>
          <Stack h="100%" justify="end">
            <Text>{props.text}</Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
