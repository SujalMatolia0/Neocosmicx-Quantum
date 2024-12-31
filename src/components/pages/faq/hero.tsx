import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { Input, Stack, Title } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export const FaqHero = () => {
  return (
    <>
      <Stack
        mih="50vh"
        justify="center"
        align="center"
        bg={COLOR.PEACH}
        py={SIZE_CONFIG.SECTION_SPACE}
      >
        <Title ta="center">Need a hand? We&apos;ve got you.</Title>
        <Input
          size="xl"
          w="50vw"
          bg="transparent"
          leftSection={<IconSearch />}
          placeholder="Search for your questions"
        />
      </Stack>
    </>
  );
};
