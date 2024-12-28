import {
  Divider,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';
import { CommonButton } from './common_button';
import { COLOR } from '@/configs/theme';

interface Props {
  title: string;
  description: string;
  data: {
    list: string;
  }[];
}

export const CommonSectorCard = (props: Props) => {
  return (
    <>
      <Paper mih="90vh" bg={COLOR.PEACH} p="md" withBorder>
        <Stack h="100%" p="md" justify="space-between">
          <Title>{props.title}</Title>
          <Divider color={COLOR.TURQUOISE} />
          <Text>{props.title}</Text>
          <Divider color={COLOR.TURQUOISE} />

          <Stack>
            {Children.toArray(
              props.data.map((item) => (
                <>
                  <List spacing="xs" size="sm" center>
                    <List.Item>{item.list}</List.Item>
                  </List>
                </>
              ))
            )}
          </Stack>
          <CommonButton title="Contact us" />
        </Stack>
      </Paper>
    </>
  );
};
