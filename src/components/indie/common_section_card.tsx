import { COLOR } from '@/configs/theme';
import { Image, Paper, Space, Stack, Text, Title } from '@mantine/core';

interface Props {
  title: string;
  description: string;
  writer: string;
  position: string;
  image: string;
}

export const CommonSectionCard = (props: Props) => {
  return (
    <>
      <Paper
        ml={-600}
        radius="xl"
        bg={COLOR.GRAY}
        h={60}
        w={100}
        style={{
          zIndex: 0,
        }}
      ></Paper>
      <Paper
        p="xl"
        mih={250}
        w={650}
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
      <Image
        ml={2200}
        src={props.image}
        alt="pic"
        style={{
          zIndex: 2,
        }}
      />
      <Paper
        radius="xl"
        bg={COLOR.GRAY}
        h={60}
        w={100}
        style={{
          zIndex: 0,
        }}
      ></Paper>
    </>
  );
};
