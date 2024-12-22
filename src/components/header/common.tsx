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
import { CommonButton } from '../indie/common_button';
import { useState } from 'react';
import { CommonMenuSection } from '../indie/common_modal_section';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ICON_SIZE } from '@filante/cobalt';
import Link from 'next/link';

const DATA = [
  {
    name: 'Solutions',
    menu: [
      {
        title: 'Membership',
        list: [
          { text: 'Individual', link: '/' },
          { text: 'Corporate', link: '/' },
        ],
      },
      {
        title: 'Q-Programming',
        list: [
          { text: 'Q-Composer', link: '/' },
          { text: 'Q-Space', link: '/' },
          { text: 'Q-ML', link: '/' },
        ],
      },
      {
        title: 'Accreditations',
        list: [{ text: 'Hi', link: '/' }],
      },
    ],
  },
  {
    name: 'Resources',
    menu: [
      {
        title: 'Chapter',
        description:
          'Recognizes advanced expertise in quantum theory and applications. Prestigious global certification.',
      },
      {
        title: 'Charted Associate Quantum Scientist',
        description:
          'Aimed at mid-level professionals in quantum science. Boost your career with this certification.',
      },
      {
        title: 'Certified Quantum Engineer',
        description:
          'Focuses on practical quantum engineering skills. Ideal for hardware and system design professionals.',
      },
    ],
  },
  {
    name: 'School',
    menu: [
      {
        title: 'Quantum Machine Learning',
        description:
          'Explore the intersection of quantum computing and AI. Learn to design quantum-powered algorithms.',
      },
      {
        title: 'Basic Quantum Computation',
        description:
          'An introductory course covering quantum gates, algorithms, and foundational principles.',
      },
      {
        title: 'Quantum Communication',
        description:
          'Dive into secure communication using quantum cryptography and entanglement-based protocols.',
      },
      {
        title: 'Quantum Drug Discovery',
        description:
          'Learn how quantum methods are revolutionizing the pharmaceutical industry through rapid simulations.',
      },
    ],
  },
  {
    name: 'Corporate Training',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

export const CommonHeader = () => {
  const { MD } = useMediaQuerys();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {MD ? (
        <Group px={80} py={20} justify="space-between">
          {/* Logo */}
          <Link href="/">
            <AspectRatio ratio={11 / 9} maw={60}>
              <Image src="/logo-removebg.png" alt="logo" />
            </AspectRatio>
          </Link>

          {/* Desktop Menu */}
          <Group gap="xl">
            {DATA.map((item) => (
              <Menu key={item.name} trigger="hover" openDelay={100}>
                <Menu.Target>
                  <Text
                    c={COLOR.TURQUOISE}
                    component={Link}
                    href={item.link || '/'}
                    style={{ cursor: item.link ? 'pointer' : 'default' }}
                  >
                    {item.name}
                  </Text>
                </Menu.Target>
                {item.menu && (
                  <Menu.Dropdown>
                    <SimpleGrid cols={item.menu.length}>
                      {item.menu.map((menuItem) => (
                        <Menu.Item key={menuItem.title}>
                          <CommonMenuSection data={[menuItem]} />
                        </Menu.Item>
                      ))}
                    </SimpleGrid>
                  </Menu.Dropdown>
                )}
              </Menu>
            ))}
          </Group>

          {/* Desktop Buttons */}
          <Group>
            <CommonButton variant="transparent" title="Get Connected" />
            <CommonButton title="Q-Platform" />
          </Group>
        </Group>
      ) : (
        <>
          {/* Mobile Header */}
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

          {/* Mobile Modal */}
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
              {/* Mobile Buttons */}
              <Group justify="center">
                <CommonButton variant="outline" title="Get Connected" />
                <CommonButton title="Q-Platform" />
              </Group>

              {/* Mobile Accordion Menu */}
              <Accordion>
                {DATA.map((item) => (
                  <Accordion.Item value={item.name} key={item.name}>
                    <Accordion.Control>
                      <Text c={COLOR.TURQUOISE}>{item.name}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      {item.menu?.map((menuItem) => (
                        <Text
                          c={COLOR.GREEN}
                          key={menuItem.title}
                          mt="xs"
                          size="sm"
                        >
                          {menuItem.title}
                        </Text>
                      ))}
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Stack>
          </Modal>
        </>
      )}
    </>
  );
};
