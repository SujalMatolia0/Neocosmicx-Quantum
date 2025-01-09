import { CommonButton } from "@/components/indie/common_button";
import { COLOR } from "@/configs/theme";
import { Center, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";

export const AboutSection1 = () => {
  return (
    <>
      <Center bg={COLOR.TURQUOISE} mih="100vh">
        <SimpleGrid m="md" spacing={60} cols={{ base: 1, md: 2 }}>
          <Image mah="70vh" radius="lg" alt="image" src="/company_1.png" />
          <Stack maw={650}>
            <Title c={COLOR.GREEN} size="2.5vw">
              Pioneering the Future with Quantum Computing
            </Title>
            <Text lh={1.2} c={COLOR.PEACH} size="1.5vw">
              Welcome to Neocosmicx, where innovation meets possibility. As a
              forward-thinking company dedicated to revolutionizing industries
              with quantum computing, we specialize in delivering cutting-edge
              solutions tailored to tackle the most complex challenges of today
              and tomorrow.
            </Text>
            <Text lh={1.2} c={COLOR.PEACH} size="1.5vw">
              Our journey began with a vision: to unlock the immense potential
              of quantum technology and make it accessible to businesses and
              organizations worldwide. At Neocosmicx, we believe quantum
              computing is not just the next big leap—it’s the foundation for a
              smarter, more connected future.
            </Text>
            <Text lh={1.2} c={COLOR.PEACH}></Text>
            <CommonButton color={COLOR.PEACH} title="Join Us Today!" />
          </Stack>
        </SimpleGrid>
      </Center>
    </>
  );
};
