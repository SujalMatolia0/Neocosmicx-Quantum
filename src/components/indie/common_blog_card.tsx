import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  ActionIcon,
  AspectRatio,
  Button,
  Center,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  IconArrowRight,
  IconArrowRightCircle,
  IconArrowRightCircleFilled,
} from '@tabler/icons-react';

interface Props {
  image: string;
  date: string;
  button: string;
  title: string;
}

export const CommonBlogCard = (props: Props) => {
  const size = useSizeHelper();
  const { MD } = useMediaQuerys();
  return (
    <>
      <Center py={SIZE_CONFIG.SECTION_SPACE} maw="100vw">
        <Paper
          mih="20vw"
          style={{
            borderColor: 'black',
            backgroundColor: '#f8efff',
            borderRadius: '20px',
          }}
        >
          <Grid justify="center" h="100%" columns={8}>
            <Grid.Col span={{ base: 8, md: 3 }}>
              <AspectRatio ratio={6 / 5}>
                <Image
                  mah="41vh"
                  radius="lg"
                  width="fit-content"
                  src={props.image}
                />
              </AspectRatio>
            </Grid.Col>
            <Grid.Col p="xl" span={{ base: 8, md: 'auto' }}>
              <Stack justify="space-evenly" h="100%">
                <Text size={MD ? '1vw' : '3 vw'}>{props.date}</Text>
                <Button w="fit-content" variant="outline" color="black">
                  {props.button}
                </Button>
                <Title size={MD ? size.TEXT_1 : '5.5vw'}>{props.title}</Title>
                <Group justify="end">
                  <ActionIcon color={COLOR.TURQUOISE} radius="xl">
                    <IconArrowRight color={COLOR.GREEN} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Paper>
      </Center>
    </>
  );
};
