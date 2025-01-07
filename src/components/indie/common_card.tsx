import { COLOR } from '@/configs/theme';
import { AspectRatio, Card, Group, Image, Stack, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import { Children } from 'react';

interface Props {
  image: string;
  title: string;
  href: string;
  description: string;
  data: {
    title: string;
  }[];
}

export const CommonCard = (props: Props) => {
  return (
    <>
      <Card component={Link} href={props.href} radius="lg">
        <Card.Section bg="#f5f5f5" p="lg">
          <Stack align="center">
            <AspectRatio ratio={6 / 5}>
              <Image
                mah="40vh"
                radius="lg"
                src={props.image}
                alt="Card image"
              />
            </AspectRatio>
            <Text tt="uppercase" size="xl">
              {props.title}
            </Text>
            <Text maw={400}>{props.description}</Text>
          </Stack>
        </Card.Section>
        <Card.Section bg={COLOR.TURQUOISE} p="md">
          <Stack>
            {Children.toArray(
              props.data.map((item) => (
                <>
                  <Group>
                    <IconArrowRight color="white" />
                    <Text size="sm" c="white" >
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
