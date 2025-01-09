import { Divider, List, Paper, Stack, Text, Title } from '@mantine/core';
import { CommonButton } from './common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { Children } from 'react';

interface Props {
  title: string;
  href: string;
  description: string;
  data: {
    text: string;
  }[];
}

export const CommonSectorCard = (props: Props) => {
  return (
    <Paper
      py={SIZE_CONFIG.SECTION_SPACE}
      mih="60vh"
      bg={COLOR.PEACH}
      px="xl"
      withBorder
    >
      <Stack h="100%" gap="xl">
        <Title>{props.title}</Title>
        <Divider color={COLOR.TURQUOISE} />
        <Text>{props.description}</Text>
        <Divider color={COLOR.TURQUOISE} />
        <List spacing="xs" size="sm" center>
          {Children.toArray(
            props.data.map((item) => <List.Item>{item.text}</List.Item>)
          )}
        </List>
        <CommonButton href="/contact" title="Contact us" />
      </Stack>
    </Paper>
  );
};
