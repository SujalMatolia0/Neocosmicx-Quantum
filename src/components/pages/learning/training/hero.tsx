import { BackgroundImage, Button, Group, Stack, Text, Title } from '@mantine/core';

export const TrainingHero = () => {
  return (
    <>
      {/* <Container py={SIZE_CONFIG.SECTION_SPACE} mih="100vh" size="xl"> */}
      {/* <video src=""></video> */}
      <BackgroundImage  src='/training_hero.jpeg'>

        <Stack p='md' h="80vh" align='center' justify="center" >
          <Title size='5vw' >Training and Certification</Title>
          <Text size='1.5vw'>
            Cloud Skills and credentials that fuel innovation, acceleration
            impact, and changes lives
          </Text>
          <Group p='xl'>
            <Button>Explore</Button>
            <Button>Develop Team</Button>
          </Group>
        </Stack>
      </BackgroundImage >
      {/* </Container> */}
    </>
  );
};
