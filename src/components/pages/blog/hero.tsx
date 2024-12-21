import { useSizeHelper } from '@/lib/hooks/size_helper';
import { Select, Stack, Title } from '@mantine/core';
import { IconArrowBack, IconArrowDown } from '@tabler/icons-react';

export const BlogHero = () => {
  const size = useSizeHelper();
  return (
    <>
      <Stack justify="space-between" align="center" mih="50vh">
        <Title size={size.TITLE_1} maw={800} ta="center">
          We love to read between the lines.
        </Title>
        <Select
          defaultValue={'Q-ML'}
          withCheckIcon
          rightSection={<IconArrowDown color="black" />}
          data={['React', 'Angular', 'Q-ML', 'Vue', 'Svelte']}
        />
      </Stack>
    </>
  );
};
