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
import { Children, useState } from 'react';
import { CommonMenuSection } from '../indie/common_modal_section';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ICON_SIZE } from '@filante/cobalt';

const DATA = [
  {
    name: 'Memberships',
    menu: [
      {
        title: 'Individual',
        description:
          'Tailored for personal growth in quantum computing. Gain access to exclusive resources and events.',
      },
      {
        title: 'Corporate',
        description:
          'Empower your team with quantum expertise. Ideal for organizations looking to innovate.',
      },
      {
        title: 'Student',
        description:
          'Affordable plans for students eager to learn quantum concepts. Includes mentorship programs.',
      },
    ],
  },
  {
    name: 'Accreditation',
    menu: [
      {
        title: 'Charted Quantum Boffin',
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
  }
];

export const CommonHeader = () => {
  const { MD } = useMediaQuerys();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {MD ? (
        <Group px={80} py={20} justify="space-between">
          <Group gap="xl">
            <AspectRatio ratio={11 / 9} maw={60}>
              <Image src="/logo-removebg.png" alt='logo' />
            </AspectRatio>
            {Children.toArray(
              DATA.map((item) => (
                <Menu trigger="hover" openDelay={100}>
                  <Menu.Target>
                    <Text c={COLOR.TURQUOISE} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </Text>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <SimpleGrid cols={item.menu?.length}>
                      {item.menu?.map((menuItem) => (
                        <Menu.Item key={menuItem.title}>
                          <CommonMenuSection
                            title={menuItem.title}
                            description={menuItem.description}
                          />
                        </Menu.Item>
                      ))}
                    </SimpleGrid>
                  </Menu.Dropdown>
                </Menu>
              ))
            )}
          </Group>
          <Group>
            <CommonButton variant="transparent" title="LogIn" />
            <CommonButton title="SignUp" />
          </Group>
        </Group>
      ) : (
        <>
          <Group p="sm" justify="space-between">
            <AspectRatio ratio={11 / 9} maw={50}>
              <Image src="/logo-removebg.png" alt='logo' />
            </AspectRatio>
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
                <>
                  <ActionIcon
                    size="xl"
                    variant="filled"
                    color={COLOR.TURQUOISE}
                    mr={15}
                  >
                    <Paper h={20} w={20} radius="50%" bg={COLOR.GREEN}>
                      <Center h="100%">
                        <IconX size={ICON_SIZE.SM} color={COLOR.TURQUOISE} />
                      </Center>
                    </Paper>
                  </ActionIcon>
                </>
              ),
            }}
          >
            <Stack>
              <Group justify="center">
                <CommonButton variant="outline" title="LogIn" />
                <CommonButton title="SignUp" />
              </Group>
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
