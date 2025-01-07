import { SIZE_CONFIG } from '@/configs/theme';
import { Center, Stack, Title, Button, Divider } from '@mantine/core';

export const ChapterSection2 = () => {
  return (
    <>
      <video src='/chapter_video.mov' autoPlay loop />

      <Center mih="30vh">
        <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
          <Title>Turning Classical into Quantum</Title>
          <Button w="fit-content">See More </Button>
          <Divider w="800px" />
        </Stack>
      </Center>
    </>
  );
};
