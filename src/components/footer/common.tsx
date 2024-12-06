import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  ActionIcon,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { CommonButton } from '../indie/common_button';
import { Children } from 'react';
import { IconBrandFacebook } from '@tabler/icons-react';
import { ICON_SIZE } from '@filante/cobalt';

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
    <Stack gap="lg">
      <Text>{props.title}</Text>
      {Children.toArray(
        props.list.map((item) => (
          <>
            <Stack gap={0}>
              {item.title && <Text size="sm">{item.title}</Text>}
              {item.links.map((link) => (
                <>
                  <Text>{link.text}</Text>
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
      <Stack mih="100vh" bg={COLOR.TURQUOISE} pl={150} py={SIZE_CONFIG.SECTION_SPACE}>
        <SimpleGrid cols={2}>
          <Stack>
            <Title>
              Smart outsourcing using a perfect blend of people and technology.
            </Title>
            <Text>
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
            <Group>
              {Children.toArray(
                SocialLogo.map((item) => (
                  <>
                    <ActionIcon variant="outline" size={ICON_SIZE.MD}>
                      {item.icon}
                    </ActionIcon>
                  </>
                ))
              )}
            </Group>
            <Text>
              Copyright 2023 | All Rights Reserved Login Privacy Policy
              Disclaimer <br /> Design: TkBoom
            </Text>
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
      </Stack>
    </>
  );
};
