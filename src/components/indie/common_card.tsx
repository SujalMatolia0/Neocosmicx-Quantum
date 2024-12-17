import { COLOR } from '@/configs/theme';
import { Card, Group, Image, Stack, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { Children } from 'react';

interface Props {
  image: string;
  title: string;
  description: string;
  data: {
    title: string;
  }[];
}



export const CommonCard = (props: Props) => {
  return (
    <>
      <Card radius="lg">
        <Card.Section p="lg">
          <Stack align="center">
            <Image src={props.image} alt="Card image" />
            <Text tt="uppercase" size="sm">
              {props.title}
            </Text>
            <Text maw={300}>{props.description}</Text>
          </Stack>
        </Card.Section>
        <Card.Section bg={COLOR.TURQUOISE} p="md">
          <Stack>
            {Children.toArray(
              props.data.map((item) => (
                <>
                  <Group>
                    <IconArrowRight color='white' />
                    <Text size="sm" c="white" td="underline">
                      {item.title}
                    </Text>
                  </Group>
                </>
              ))
            )}
          </Stack>
        </Card.Section>
      </Card>
    </>
  );
};
