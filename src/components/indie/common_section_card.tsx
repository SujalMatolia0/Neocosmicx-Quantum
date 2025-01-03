import { COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Image, Paper, Space, Stack, Text, Title } from '@mantine/core';

interface Props {
  title: string;
  description?: string;
  writer: string;
  position?: string;
  image?: string;
}

export const CommonSectionCard = (props: Props) => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Paper
        pos="relative"
        right={300}
        top={50}
        radius="xl"
        bg={COLOR.GRAY}
        h={MD ? 60 : 250}
        w={MD ? 100 : 50}
        style={{
          zIndex: 0,
        }}
      ></Paper>
      <Paper
        pos="relative"
        p="xl"
        mih={MD ? 250 : 100}
        w={MD ? 650 : 300}
        shadow="xl"
        style={{
          zIndex: 1,
        }}
      >
        <Stack>
          <Title>{props.title}</Title>
          <Text maw={500}>{props.description}</Text>
          <Space h="md" />
          <Text size="sm" fw="bold">
            {props.writer}
          </Text>
          <Text size="sm">{props.position}</Text>
        </Stack>
      </Paper>
      <Paper
        pos="relative"
        left={300}
        top={-50}
        radius="xl"
        bg={COLOR.GRAY}
        h={60}
        w={100}
        style={{
          zIndex: 0,
        }}
      ></Paper>
      {props.image && (
        <Image
          h={MD ? 300 : 250}
          w={MD ? 250 : 250}
          radius="lg"
          pos="relative"
          left={MD ? 450 : 0}
          top={MD ? -350 : -750}
          src={props.image}
          alt="pic"
          style={{
            zIndex: 2,
          }}
        />
      )}
    </>
  );
};
