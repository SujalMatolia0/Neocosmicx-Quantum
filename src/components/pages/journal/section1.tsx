import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import { Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const JournalSection1 = () => {
  return (
    <>
      <Stack align="center" justify="center" bg={COLOR.GRAY} mih="50vh">
        <SimpleGrid spacing="100" cols={{ base: 1, md: 2 }}>
          <Title ml="auto" maw="500px" ta="right">
            Are you looking to publish your research in Journal(Q-Plus)
          </Title>
          <Stack justify="center">
            <CommonButton variant="outline" title="More details " />
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  );
};
