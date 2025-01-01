import { COLOR } from '@/configs/theme';
import { BackgroundImage, Paper, Stack, Text, Title } from '@mantine/core';

export const TeamHero = () => {
  return (
    <>
      <Stack p="md" justify="center" align="center" mih="20vh">

        <Title>We are the people who make untitled</Title>
      </Stack>
      <Stack>
        <Paper mih='80vh' withBorder>
          <BackgroundImage h='80vh' src='/sagark.jpeg'>
            <Stack p='md' justify='space-evenly' h='100%'>
              <Title c={COLOR.TURQUOISE} tt='capitalize'>Disruptive wisdom</Title>
              <Paper p='md' maw={500} bg={COLOR.GREEN} withBorder>
                <Text c={COLOR.TURQUOISE}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam maiores vitae dolores dolore reprehenderit voluptate accusantium harum omnis molestiae?
                  Dolores cumque cum fuga possimus animi at illum, saepe temporibus voluptatem.</Text>
              </Paper>
            </Stack>

          </BackgroundImage>
        </Paper>
      </Stack>

    </>
  );
};
