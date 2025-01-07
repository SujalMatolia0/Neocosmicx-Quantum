import { SIZE_CONFIG, COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { Carousel } from '@mantine/carousel';
import { AspectRatio, Image, Paper, Stack, Title } from '@mantine/core';
import { Children } from 'react';
const TEAM = [
  {
    image: '/india-chapter.jpg',
    name: 'Chapter - QIND-Q',
    country: 'India',
    role: 'Know More',
  },
  {
    image: '/Germany-chapter.jpg',
    name: 'Chapter - QGER',
    country: 'Germany',
    role: 'Know More',
  },
  {
    image: '/Australia-chapter.jpg',
    name: 'Chapter - QAUS',
    country: 'Australia',
    role: 'Know More',
  },
  {
    image: '/England-chapter.jpg',
    name: 'Chapter - QENG',
    country: 'England',
    role: 'Know More',
  },
  {
    image: '/Japan-chapter.jpg',
    name: 'Chapter - QJAP',
    country: 'Japan',
    role: 'Know More',
  },
  {
    image: '/America-chapter.jpg',
    name: 'Chapter - QUS',
    country: 'US of A',
    role: 'Know More',
  },
];

export const ChapterSection1 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      {/* <Center > */}
      <Stack gap="xl" p="xl" py={SIZE_CONFIG.SECTION_SPACE}>
        <Title ta="center">Our Fellow Chapters</Title>
        <Carousel
          px={MD ? '100' : 'xs'}
          // py={SIZE_CONFIG.SECTION_SPACE}
          slideSize="33.333333%"
          slideGap="md"
          align="start"
          slidesToScroll={1}
        >
          {Children.toArray(
            TEAM.map((team) => (
              <>
                <Carousel.Slide>
                  <Paper
                    style={{ borderRadius: '10px', borderColor: COLOR.GREEN }}
                    mih={MD ? '70vh' : '30vh'}
                    radius={0}
                    withBorder
                    bg="transparent"
                    shadow="md"
                    p="md"
                  >
                    <Stack>
                      <AspectRatio ratio={15 / 17}>
                        <Image radius="lg" src={team.image} alt="Image" />
                      </AspectRatio>
                      <Stack align="center" gap={2}>
                        <Title fw="bold" size="md">
                          {team.name}
                        </Title>
                        <Title fw="normal" size="sm">
                          {team.country}
                        </Title>
                        <Title c="dimmed" size="sm">
                          {team.role}
                        </Title>
                      </Stack>
                    </Stack>
                  </Paper>
                </Carousel.Slide>
              </>
            ))
          )}
        </Carousel>
      </Stack>
      {/* </Center> */}
    </>
  );
};
