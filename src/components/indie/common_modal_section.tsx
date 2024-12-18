import { COLOR } from '@/configs/theme';
import { ICON_SIZE } from '@filante/cobalt';
import { Stack, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

interface Props {
  title: string;
  description?: string;
}

export const CommonMenuSection = (props: Props) => {
  return (
    <>
      <Stack  maw={200} justify='start'>
        <Text c={COLOR.TURQUOISE} size="lg">
          {props.title}
        </Text>
        <Text size='sm' c={COLOR.TURQUOISE}>{props.description}</Text>
        <Text
          td="underline"
          c={COLOR.GREEN}
          component={Link}
          href="/coming_soon"
          size='xs'
        >
          Coming Soon <IconArrowRight size={ICON_SIZE.XS} />
        </Text>
      </Stack>
    </>
  );
};
