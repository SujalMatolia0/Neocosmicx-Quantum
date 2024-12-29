import { SIZE_CONFIG } from '@/configs/theme';
import { Button, Container, Group, Stack, Text, Title } from '@mantine/core';

export const TrainingHero = () => {
  return (
    <>
      {/* <Container py={SIZE_CONFIG.SECTION_SPACE} mih="100vh" size="xl"> */}
      {/* <video src=""></video> */}
      <Stack p='md' h="80vh" align='center' justify="center" >
        <Title >Training and Certification</Title>
        <Text>
          Cloud Skills and credentials that fuel innovation, acceleration
          impact, and changes lives
        </Text>
        <Group>
          <Button>Explore</Button>
          <Button>Develop Team</Button>
        </Group>
      </Stack>
      {/* </Container> */}
    </>
  );
};
