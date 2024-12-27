import {
  Center,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Title,
} from '@mantine/core';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { CommonButton } from '@/components/indie/common_button';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import Link from 'next/link';

export const LandingSection1 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        bg={COLOR.TURQUOISE}
        gap="lg"
        py={SIZE_CONFIG.SECTION_SPACE}
        mih="100%"
      >
        <SimpleGrid px={MD ? '140' : 'xs'} cols={{ base: 1, md: 2 }}>
          <Group>
            <Image radius="lg" alt="pic" src="/section-one.jpeg" />
          </Group>
          <Stack pl={MD ? '80' : 'xs'}>
            <Title c={COLOR.PEACH}>
              Revolutionize your thinking with quantum mastery
            </Title>
            <Text c={COLOR.PEACH}>
              Our tailored quantum computing courses provide a transformation
              learning experience, combining expert guidance with hand on
              innovation this unique opportunity is designed to advance your
              expertise, enhance your skills, and prepare you for the forefront
              of quantum technology where knowledge and technology converge
            </Text>
            <Text c={COLOR.PEACH}>
              Our various programs are to keep your learning faster, and
              productive.
            </Text>
          </Stack>
        </SimpleGrid>
        <Group pt="xl" justify="center" gap="xl">
          <CommonButton title="Get Enrolled!" color={COLOR.PEACH} />
        </Group>
      </Stack>
    </>
  );
};
