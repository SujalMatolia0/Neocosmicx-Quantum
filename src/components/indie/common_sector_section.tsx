import {
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { CommonButton } from './common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';

interface Props {
  image: string;
  title: string;
  description: string;
  button?: string;
}

export const CommonSectorSection = (props: Props) => {
  return (
    <Container py={SIZE_CONFIG.SECTION_SPACE} size="lg">
      <SimpleGrid p="md" mih="70vh" bg={COLOR.GRAY} cols={{ base: 1, md: 2 }}>
        <Stack m="auto" p="md">
          <Title>{props.title}</Title>
          <Text>{props.description}</Text>
          <CommonButton title="Learn More" />
        </Stack>

        <Image w="100%" p={0} h="100%" src={props.image} alt="Section image" />
      </SimpleGrid>
    </Container>
  );
};
