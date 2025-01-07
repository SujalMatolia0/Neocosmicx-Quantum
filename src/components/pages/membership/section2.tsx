import { COLOR, SIZE_CONFIG } from "@/configs/theme";
import { useMediaQuerys } from "@filante/cobalt/hooks";
import {
  Container,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Children } from "react";

const DATA = [
  {
    title: "Benefits",
    text: "Stay Ahead in a Rapidly Evolving Field",
  },
  {
    title: "Benefits",
    text: "Exclusive Resources and Tools",
  },
  {
    title: "Benefits",
    text: "Recognition and Credibility",
  },
  {
    title: "Benefits",
    text: "Global Networking Opportunities",
  },
];

export const MembershipSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Container mih="100vh" size="xl">
        <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
          <Title>Why Become an Neocosmicx Member?</Title>
          <Text ta="center" maw={700}>
            Joining Neocosmicx as a member means stepping into the forefront of
            quantum innovation. Whether you’re an individual, student, or
            organization, membership offers exclusive access to resources,
            tools, and a global community that will empower you to make an
            impact in the quantum era.
          </Text>
        </Stack>
        <Stack
          py={SIZE_CONFIG.SECTION_SPACE}
          justify="center"
          p="md"
          align="center"
          mih={MD ? "40vh" : "40vh"}
        >
          <SimpleGrid cols={{ base: 1, md: 4 }}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Paper
                    style={{
                      borderRadius: "10px",
                      borderColor: COLOR.TURQUOISE,
                    }}
                    mih={MD ? "30vh" : "60vh"}
                    w={MD ? 250 : 350}
                    radius={0}
                    p="md"
                    withBorder
                    bg="white"
                  >
                    <Stack align="center">
                      <Image alt="image" radius="lg" src="benefits1.jpeg" />
                      <Title>{item.title}</Title>
                      <Text ta="center">{item.text} </Text>
                    </Stack>
                  </Paper>
                </>
              ))
            )}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
};
