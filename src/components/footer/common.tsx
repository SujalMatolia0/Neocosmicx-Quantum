import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  ActionIcon,
  AspectRatio,
  Divider,
  Group,
  Image,
  rem,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { Children } from 'react';
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { useMediaQuerys } from '@filante/cobalt/hooks';

const SocialLogo = [
  {
    icon: (
      <>
        <IconBrandLinkedin />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandTwitter />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandYoutube />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandWhatsapp />
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
            <Stack gap="3">
              {item.title && (
                <Text size="xs" opacity={0.8} c={COLOR.GREEN}>
                  {item.title}
                </Text>
              )}
              <Space h="xs" />
              {item.links.map((link) => (
                <>
                  <Text size="sm" c={COLOR.GREEN}>
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
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        mih="70vh"
        bg={COLOR.TURQUOISE}
        pl={MD ? 150 : 'md'}
        py={SIZE_CONFIG.SECTION_SPACE}
      >
        
        <Stack
          pr={100}
          w="100%"
          justify="center"
        >
          <AspectRatio ratio={11 / 2.8} maw="300">
            <Image src="/logo-full.png" alt="logo" />
          </AspectRatio>

          <SimpleGrid py={SIZE_CONFIG.SECTION_SPACE} cols={{ base: 2, md: 5 }}>
            {/* <Stack>
                <CommonTag
                  title="GET IN TOUCH"
                  list={[
                    {
                      title: 'Headquarter- JDH',
                      links: [
                        { text: 'Jodhpur,Rajasthan' },
                        { text: '8005982481' },
                      ],
                    },
                    {
                      title: 'Operation- JAI',
                      links: [{ text: 'Jaipur, Rajasthan' }],
                    },
                    {
                      title: 'Contact Us',
                      links: [{ text: 'info@neocosmicx.in' }],
                    },
                  ]}
                />
          </Stack> */}
            <CommonTag
              title="SOLUTIONS"
              list={[
                {
                  links: [
                    { text: 'Quantum Machine Learning' },
                    { text: 'Quantum Space & Cosmology' },
                    { text: 'Quantum Transportation & Mobility' },
                    { text: 'Quantum Pharma & Chemistry' },
                    { text: 'Quantum Network & Security' },
                    { text: 'Quantum Material Science' },
                    { text: 'Quantum Defense' },
                    { text: 'Quantum Finance' },
                  ],
                },
              ]}
            />
            <CommonTag
              title="RESOURCES"
              list={[
                {
                  links: [
                    { text: 'Quantune.py' },
                    { text: 'Membership' },
                    { text: 'Chapter' },
                    { text: 'Journal (Q-Plus)' },
                  ],
                },
              ]}
            />
            <CommonTag
              title="ACCREDITATIONS"
              list={[
                {
                  links: [
                    { text: 'Quantum Innovator Program' },
                    { text: 'Charted Quantum Scientist' },
                    { text: 'Charted Quantum Engineer' },
                  ],
                },
              ]}
            />
            <CommonTag
              title="LEARNINGS"
              list={[
                {
                  links: [
                    { text: 'Courses' },
                    { text: 'Trainings' },
                    { text: 'Research' },
                  ],
                },
              ]}
            />
            <CommonTag
              title="ABOUT"
              list={[
                {
                  links: [
                    { text: 'Company' },
                    { text: 'Pricing' },
                    { text: 'Join Us' },
                    { text: 'FAQs' },

                  ],
                },
              ]}
            />
          </SimpleGrid>
          <Divider color={COLOR.GREEN} />
          <SimpleGrid cols={{ base: 1, md: 3 }}>
            <Text size="xs" c={COLOR.GREEN}>
              Copyright 2024 | All Rights Reserved<br /> Login Privacy Policy
            </Text>
            <Group justify='center'>
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
            <Group align='right' justify='right'>
              <Text c={COLOR.GREEN}>Privacy</Text>
              <Text c={COLOR.GREEN}>Terms</Text>
            </Group>
          </SimpleGrid>
        </Stack>
      </Stack>
    </>
  );
};
