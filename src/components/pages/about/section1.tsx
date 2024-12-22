import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import { Center, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const AboutSection1 = () => {
  return (
    <>
      <Center bg={COLOR.TURQUOISE} mih="100vh">
        <SimpleGrid m="md" spacing={60} cols={{ base: 1, md: 2 }}>
          <Image radius="lg" alt="image" src="/quantum-27.webp" />
          <Stack maw={650}>
            <Title c={COLOR.GREEN}>
              Pioneers in Outsourcing Services since 2002
            </Title>
            <Text lh={1.2} c={COLOR.PEACH}>
              Founded and headquartered in Portland, Oregon in 2002, TechSpeed
              Inc is a women-owned and led technology company. We enable
              businesses of all sizes to accelerate growth with comprehensive
              and scalable outsourcing services. As pioneers in data services,
              we specialize in pairing human support with technology automation.
            </Text>
            <Text lh={1.2} c={COLOR.PEACH}>
              Headquartered in the USA, with production offices in India,
              TechSpeed employs a unique onshore and offshore team model that
              prioritizes customer service with US-based project management and
              scalable offshore production teams.
            </Text>
            <Text lh={1.2} c={COLOR.PEACH}>
              Our large and growing multinational team of consultants, managers,
              data specialists and technologists is at the very heart of our
              success. We foster a culture of continuous learning and strive
              every day to exceed our clients’ expectations.
            </Text>
            <CommonButton color={COLOR.PEACH} title="Build Your Team Now" />
          </Stack>
        </SimpleGrid>
      </Center>
    </>
  );
};
