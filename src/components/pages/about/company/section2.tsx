import { COLOR, SIZE_CONFIG } from "@/configs/theme";
import { useMediaQuerys } from "@filante/cobalt/hooks";
import {
  AspectRatio,
  Center,
  Group,
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
    No: "1",
    title: "Client Consultations",
    text: "We begin by engaging in in-depth consultations to outline and align the project scope with your objectives. Understanding your vision is our first priority.",
    image: "/q-ml.png",
  },
  {
    No: "2",
    title: "Problem Analysis",
    text: "Our experts analyze your unique challenges, identifying opportunities where quantum computing can create the most significant impact.",
    image: "/q-ml.png",
  },
  {
    No: "3",
    title: "Solution Design",
    text: "We design tailored Quantum algorithms and models, ensuring they align with your goals and deliver measurable value.",
    image: "/q-ml.png",
  },
  {
    No: "4",
    title: "Development & Testing",
    text: "With precision and care, we develop and rigorously test the solution to ensure it meets the highest standards of performance and reliability.",
    image: "/q-ml.png",
  },
  {
    No: "5",
    title: "Deployment & Integration",
    text: "Our team ensures seamless deployment, integrating the quantum solution into your existing systems while minimizing disruptions.",
    image: "/q-ml.png",
  },
  {
    No: "6",
    title: "Continuous Support & Optimization",
    text: "We provide ongoing support, monitoring, and optimization to ensure sustained success and adaptability to future challenges.",
    image: "/q-ml.png",
  },
];
export const AboutSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Center py={SIZE_CONFIG.SECTION_SPACE} mih="100vh">
        <Stack align="center">
          <Title c={COLOR.TURQUOISE}>Our Process</Title>
          <Text maw={800} c={COLOR.TURQUOISE} ta="center">
            At Neocosmicx, our process is built on collaboration, precision, and
            a deep understanding of your needs. We aim to simplify quantum
            computing for our clients while delivering transformative results.
            Here’s how we make it happen:
          </Text>
          <SimpleGrid miw="90vw" p="md" spacing={0} cols={{ base: 1, md: 3 }}>
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Paper
                    p="md"
                    bg="transparent"
                    style={{ borderColor: COLOR.TURQUOISE }}
                    radius={0}
                    withBorder
                    mih={140}
                  >
                    <Stack justify="space-between">
                      <Group justify="end">
                        <AspectRatio ratio={2 / 2}>
                          <Image
                            mah={MD ? "4vw" : "15vw"}
                            src={item.image}
                            alt="image"
                          />
                        </AspectRatio>
                      </Group>
                      <Stack gap={1}>
                        <Text c={COLOR.TURQUOISE} size={MD ? "2vw" : "5vw"}>
                          {item.No}
                        </Text>
                        <Text c={COLOR.TURQUOISE}>{item.title}</Text>
                        <Text c={COLOR.TURQUOISE}>{item.text}</Text>
                      </Stack>
                    </Stack>
                  </Paper>
                </>
              ))
            )}
          </SimpleGrid>
        </Stack>
      </Center>
    </>
  );
};
