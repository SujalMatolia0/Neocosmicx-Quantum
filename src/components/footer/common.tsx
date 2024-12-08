import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  ActionIcon,
  Center,
  Group,
  Image,
  Paper,
  rem,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { CommonButton } from '../indie/common_button';
import { Children } from 'react';
import { IconBrandFacebook } from '@tabler/icons-react';

const SocialLogo = [
  {
    icon: (
      <>
        <IconBrandFacebook />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandFacebook />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandFacebook />
      </>
    ),
  },
];

interface CommonTagsProps {
  title: string;
  list: {
    title?: string;
    links: {
      text: string;
    }[];
  }[];
}

const CommonTag = (props: CommonTagsProps) => (
  <>
    <Stack gap="md">
      <Text c={COLOR.GREEN}>{props.title}</Text>
      {Children.toArray(
        props.list.map((item) => (
          <>
            <Stack gap={0}>
              {item.title && (
                <Text size="xs" opacity={0.8} c={COLOR.GREEN}>
                  {item.title}
                </Text>
              )}
              <Space h="xs" />
              {item.links.map((link) => (
                <>
                  <Text size="sm" opacity={0.9} c={COLOR.GREEN}>
                    {link.text}
                  </Text>
                </>
              ))}
            </Stack>
          </>
        ))
      )}
    </Stack>
  </>
);

export const CommonFooter = () => {
  return (
    <>
      <Stack
        mih="100vh"
        bg={COLOR.TURQUOISE}
        pl={150}
        pt={SIZE_CONFIG.SECTION_SPACE}
      >
        <SimpleGrid cols={2}>
          <Stack maw={500}>
            <Title c={COLOR.GREEN}>
              Smart outsourcing using a perfect blend of people and technology.
            </Title>
            <Text c={COLOR.GREEN}>
              100% on-time delivery guaranteed. You need it quick, fast,
              yesterday. We understand. Tell us your data entry outsourcing
              objectives and we will build a data solution customized to your
              needs.
            </Text>
            <Group>
              <CommonButton title="give us a call" color={COLOR.PEACH} />
              <CommonButton title="give us a call" />
            </Group>
          </Stack>
          <Group>
            <Image alt="pic" />
          </Group>
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <Stack>
            <Image alt="logo" />
          </Stack>
          <Stack>
            <SimpleGrid cols={3}>
              <Stack>
                <CommonTag
                  title="Solutions"
                  list={[
                    {
                      title: 'AI Driven Processing',
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                    {
                      title: 'AI Driven Processing',
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                    {
                      title: 'AI Driven Processing',
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                  ]}
                />
              </Stack>
              <Stack>
                <CommonTag
                  title="Solutions"
                  list={[
                    {
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                  ]}
                />
                <CommonTag
                  title="Solutions"
                  list={[
                    {
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                  ]}
                />
                <CommonTag
                  title="Solutions"
                  list={[
                    {
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                  ]}
                />
              </Stack>
              <Stack>
                <CommonTag
                  title="Solutions"
                  list={[
                    {
                      title: 'AI Driven Processing',
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                    {
                      title: 'AI Driven Processing',
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                    {
                      title: 'AI Driven Processing',
                      links: [
                        { text: 'Data Entry' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                        { text: 'Content Management' },
                      ],
                    },
                  ]}
                />
              </Stack>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <Stack>
            <Group>
              {Children.toArray(
                SocialLogo.map((item) => (
                  <>
                    <ActionIcon
                      color={COLOR.GREEN}
                      variant="outline"
                      size={rem(40)}
                    >
                      {item.icon}
                    </ActionIcon>
                  </>
                ))
              )}
            </Group>
            <Text size="xs" c={COLOR.GREEN}>
              Copyright 2023 | All Rights Reserved Login Privacy Policy
              Disclaimer <br /> Design: TkBoom
            </Text>
          </Stack>
          <Group gap="xl">
            {Children.toArray(
              SocialLogo.map((item) => (
                <>
                  <Image src={item.icon} alt="pic" />
                </>
              ))
            )}
          </Group>
        </SimpleGrid>
        <Paper
          bg={COLOR.GREEN}
          h={150}
          w={150}
          pos="relative"
          left={1200}
          bottom={40}
          radius="50%"
          style={{
            rotate: '35deg',
          }}
        >
          <Center h="100%">
            <Text c={COLOR.TURQUOISE} maw={80}>
              jklasdak sk jsdna;sjd;oi
            </Text>
          </Center>
        </Paper>
      </Stack>
    </>
  );
};
