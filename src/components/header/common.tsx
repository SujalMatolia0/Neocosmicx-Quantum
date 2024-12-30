import { COLOR } from '@/configs/theme';
import {
  Group,
  Text,
  Menu,
  SimpleGrid,
  Modal,
  ActionIcon,
  Paper,
  Center,
  Accordion,
  Stack,
  Image,
  AspectRatio,
} from '@mantine/core';
import { CommonButton } from '../indie/common_button'; // Ensure this is correctly imported
import { useState } from 'react';
import { CommonMenuSection } from '../indie/common_modal_section'; // Ensure this is correctly imported
import { useMediaQuerys } from '@filante/cobalt/hooks'; // Ensure this is correctly imported
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ICON_SIZE } from '@filante/cobalt';
import Link from 'next/link';

const DATA = [
  {
    title: 'Solutions',
    menu: [
      {
        title: 'Sectors',
        list: [
          { text: 'Machine Learning', link: '/q-ml' },
          { text: 'Space & Cosmology', link: '/q-space' },
          { text: 'Transportation & Mobility', link: '/transportation' },
          { text: 'Pharma & Chemistry', link: '/pharma' },
          { text: 'Material Science', link: '/material-science' },
          { text: 'Network & Security', link: '/communication' },
          { text: 'Defense', link: '/defense' },
          { text: 'Finance', link: '/finance' },
        ],
      },
      {
        title: 'Accreditations',
        list: [
          { text: 'Charted Quantum Boffin', link: '/charted_quantum_boffin' },
          {
            text: 'Charted Associate Quantum Scientist',
            link: '/charted_quantum_scientist',
          },
          {
            text: 'Certified Quantum Engineer',
            link: '/charted_quantum_engineer',
          },
        ],
      },
    ],
  },
  {
    title: 'Resources',
    menu: [
      {
        list: [
          { text: 'Quantune.py', link: '/' },
          { text: 'Membership', link: '/membership' },
          { text: 'Chapter', link: '/chapter' },
          { text: 'Journal (Q-Plus)', link: '/journal' },
          { text: 'Challenges', link: '/challenges' },
        ],
      },
    ],
  },
  {
    title: 'Learnings',
    menu: [
      {
        list: [
          { text: 'Courses', link: '/courses' },
          { text: 'Trainings', link: '/training' },
          { text: 'Research', link: '/research' },
          { text: 'Codebook', link: '/codebook' },
        ],
      },
    ],
  },
  {
    title: 'About',
    menu: [
      {
        list: [
          { text: 'Company', link: '/about' },
          { text: 'Team', link: '/team' },
          { text: 'Pricing', link: '/pricing' },
          { text: 'Join Us', link: '/join-us' },
          { text: 'FAQs', link: '/faq' },
        ],
      },
    ],
  },
  {
    title: 'Spark',
    description: '/blog',
  },
  {
    title: 'Contact',
    description: '/contact',
  },
];

export const CommonHeader = () => {
  const { MD } = useMediaQuerys(); // Assuming useMediaQuerys() is correctly defined elsewhere
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {MD ? (
        <Group px={80} py={20} justify="space-between">
          <Link href="/">
            <AspectRatio ratio={11 / 9} maw={60}>
              <Image src="/logo-removebg.png" alt="logo" />
            </AspectRatio>
          </Link>

          <Group gap="xl">
            {DATA.map((item) => (
              <Menu key={item.title} trigger="hover" openDelay={100}>
                <Menu.Target>
                  <Text
                    c={COLOR.TURQUOISE}
                    component={Link}
                    href={item.description || ''}
                    style={{ cursor: item.description ? 'pointer' : 'default' }}
                  >
                    {item.title}
                  </Text>
                </Menu.Target>
                {item.menu && (
                  <Menu.Dropdown
                    style={{
                      background: 'rgba(1, 55, 61, 0.2)', // Semi-transparent background
                      backdropFilter: 'blur(15px)', // Mirror-like effect
                      border: '1px solid rgba(255, 255, 255, 0.3)', // Subtle border for definition
                      borderRadius: '8px', // Rounded corners
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Soft shadow
                      padding: '8px', // Inner spacing
                    }}
                  >
                    <SimpleGrid cols={item.menu.length}>
                      {item.menu.map((menuItem, idx) => (
                        <Menu.Item key={idx}>
                          <CommonMenuSection data={[menuItem]} />
                        </Menu.Item>
                      ))}
                    </SimpleGrid>
                  </Menu.Dropdown>
                )}
              </Menu>
            ))}
          </Group>

          <Group>
            <CommonButton
              href="/contact"
              variant="transparent"
              title="Get Connected"
            />
            <CommonButton title="Q-Platform" />
          </Group>
        </Group>
      ) : (
        <>
          <Group p="sm" justify="space-between">
            <Link href="/">
              <AspectRatio ratio={11 / 9} maw={50}>
                <Image src="/logo-removebg.png" alt="logo" />
              </AspectRatio>
            </Link>
            <ActionIcon
              size="xl"
              onClick={() => setModalOpen(true)}
              variant="filled"
              color={COLOR.TURQUOISE}
            >
              <Paper h={20} w={20} radius="50%" bg={COLOR.GREEN}>
                <Center h="100%">
                  <IconMenu2 size={ICON_SIZE.SM} color={COLOR.TURQUOISE} />
                </Center>
              </Paper>
            </ActionIcon>
          </Group>

          <Modal
            fullScreen
            opened={modalOpen}
            onClose={() => setModalOpen(false)}
            title="CVRCQRD"
            c={COLOR.TURQUOISE}
            closeButtonProps={{
              icon: (
                <ActionIcon size="xl" variant="filled" color={COLOR.TURQUOISE}>
                  <Paper h={20} w={20} radius="50%" bg={COLOR.GREEN}>
                    <Center h="100%">
                      <IconX size={ICON_SIZE.SM} color={COLOR.TURQUOISE} />
                    </Center>
                  </Paper>
                </ActionIcon>
              ),
            }}
          >
            <Stack>
              <Group justify="center">
                <CommonButton variant="outline" title="Get Connected" />
                <CommonButton title="Q-Platform" />
              </Group>

              <Accordion>
                {DATA.map((item) => (
                  <Accordion.Item value={item.title} key={item.title}>
                    <Accordion.Control>
                      <Text c={COLOR.TURQUOISE}>{item.title}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      {item.menu?.map((menuItem, idx) => (
                        <Stack key={idx}>
                          {
                            (menuItem.title) ?
                              <Text c={COLOR.TURQUOISE} mt="xs" size="sm">
                                {menuItem.title}
                              </Text>
                              : null
                          }

                          {menuItem.list.map((linkItem, linkIdx) => (
                            <Text key={linkIdx} c={COLOR.GREEN} size="sm">
                              <Link href={linkItem.link}>{linkItem.text}</Link>
                            </Text>
                          ))}
                        </Stack>
                      ))}
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Stack>
          </Modal>
        </>
      )
      }
    </>
  );
};
