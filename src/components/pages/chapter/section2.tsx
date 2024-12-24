import { SIZE_CONFIG } from '@/configs/theme';
import { Center, Stack, Title, Button, Divider } from '@mantine/core';

export const ChapterSection2 = () => {
  return (
    <>
      {/* Add Video here */}

      <Center mih="30vh">
        <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
          <Title>Watch the new 2024 TED Fellows Films</Title>
          <Button w="fit-content">See our fellow </Button>
          <Divider w="800px" />
        </Stack>
      </Center>
    </>
  );
};
