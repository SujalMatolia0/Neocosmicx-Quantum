import { SIZE_CONFIG, COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Carousel } from '@mantine/carousel';
import { Stack, Title, Paper, AspectRatio, Image, Center } from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    image: '/noor.png',
    title: 'Challenge Name',
    text: 'Challenge Detail',
  },
  {
    image: '/noor.png',
    title: 'Hydro Bonding',
    text: 'Optimize the efficiency of your QAOA routine',
  },
  {
    image: '/noor.png',
    title: 'Hydro Bonding',
    text: 'Optimize the efficiency of your QAOA routine',
  },
];
export const ChallengesSection1 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        bg={COLOR.TURQUOISE}
        gap="xl"
        p="xl"
        py={SIZE_CONFIG.SECTION_SPACE}
      >
        <Title c={COLOR.GREEN} ta="center">
          Newest Coding Challenges
        </Title>
        <Center>
          <Carousel
            loop
            maw={1100}
            mih="20vh"
            px={MD ? '100' : 'xs'}
            // py={SIZE_CONFIG.SECTION_SPACE}
            slideSize={MD ? '33.333333%' : '50%'}
            slideGap="md"
            align="start"
            slidesToScroll={1}
          >
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Carousel.Slide>
                    <Paper
                      style={{ borderRadius: '10px', borderColor: COLOR.GREEN }}
                      mih={MD ? '40vh' : '40vh'}
                      radius={0}
                      withBorder
                      bg="transparent"
                      shadow="md"
                      p="md"
                    >
                      <Stack>
                        <AspectRatio ratio={15 / 11}>
                          <Image radius="lg" src={item.image} alt="Image" />
                        </AspectRatio>
                        <Stack justify="space-around" align="center">
                          <Title c={COLOR.PEACH} fw="bold" size="md">
                            {item.title}
                          </Title>
                          <Title
                            c={COLOR.PEACH}
                            ta="center"
                            fw="normal"
                            size="sm"
                          >
                            {item.text}
                          </Title>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Carousel.Slide>
                </>
              ))
            )}
          </Carousel>
        </Center>
      </Stack>
    </>
  );
};
