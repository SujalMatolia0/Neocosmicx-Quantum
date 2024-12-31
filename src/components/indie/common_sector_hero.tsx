import { COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  AspectRatio,
  Button,
  // Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

interface Props {
  section: string;
  page: string;
  text: string;
  image: string;
}

export const CommonSectorHero = (props: Props) => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack mih="100vh">
        {/* <Container size="lg"> */}
        <SimpleGrid
          px={MD ? '8%' : 'md'}
          py="md"
          mih="30vh"
          cols={{ base: 1, md: 2 }}
        >
          <Stack h="100%" justify="end">
            <Button color={COLOR.GREEN} tt="uppercase" w="fit-content">
              {props.section}
            </Button>
            <Stack gap={0.2}>
              <Title lh={1} size="7vw">
                Quantum
              </Title>
              <Text size="3vw">{props.page}</Text>
            </Stack>
          </Stack>
          <Stack h="100%" justify="end">
            <Text>{props.text}</Text>
          </Stack>
        </SimpleGrid>
        {/* </Container> */}
        <AspectRatio ratio={16 / 4.2}>
          <Image mih="55vh" src={props.image} alt="Hero-Image" />{' '}
        </AspectRatio>
      </Stack>
    </>
  );
};
