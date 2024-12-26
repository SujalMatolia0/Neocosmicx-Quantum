import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  Accordion,
  Divider,
  Input,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Children } from 'react';

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
        <Title ta="center">Need a hand? We've got you.</Title>
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
