import {
  Button,
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
  text: string;
  button?: string;
  key: number;
}

export const CommonSectorSection = (props: Props) => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="lg">
        <SimpleGrid p="md" mih="70vh" bg={COLOR.GRAY} cols={{ base: 1, md: 2 }}>
          {props.key === 2 ? (
            <Image w="100%" p={0} h="100%" src={props.image} alt="Image" />
          ) : null}

          <Stack m="auto" p="md">
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <CommonButton title={props.button || 'Learn More'} />
          </Stack>
          {props.key != 1 ? (
            <Image w="100%" p={0} h="100%" src={props.image} alt="Image" />
          ) : null}
        </SimpleGrid>
      </Container>
    </>
  );
};
