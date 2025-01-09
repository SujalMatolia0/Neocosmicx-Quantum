import { Carousel } from '@mantine/carousel';
import { Avatar, Stack, Text } from '@mantine/core';
import { Children } from 'react';

export const TeamSection2 = () => {
  const DATA = [
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
    {
      title:
        'Untitled UI is the largest Figma UI kit and design system in the world. Kickstart any project, save thousands of hours, and level up as a designer.',
      image: '/noor.png',
      name: 'Noor-ul Hasan',
      role: 'Developer',
    },
  ];
  return (
    <>
      <Carousel withControls loop>
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Carousel.Slide mih="50vh">
                <Stack mih="80vh" justify="center" align="center">
                  <Text ta="center" maw={700}>
                    {item.title}
                  </Text>
                  <Avatar size={100} src={item.image} alt="image" />
                  <Stack align="center" gap={0}>
                    <Text>{item.name}</Text>
                    <Text>{item.role}</Text>
                  </Stack>
                </Stack>
              </Carousel.Slide>
            </>
          ))
        )}
      </Carousel>
    </>
  );
};
