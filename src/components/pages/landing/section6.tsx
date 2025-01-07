import { CommonButton } from "@/components/indie/common_button";
import { COLOR } from "@/configs/theme";
import { useMediaQuerys } from "@filante/cobalt/hooks";
import {
  AspectRatio,
  Divider,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { Children } from "react";

const DATA = [
  {
    title: "Collaborate with Global Experts",
  },
  {
    title: "Access Exclusive Resources",
  },
  {
    title: "Expand Your Opportunities",
  },
  {
    title: "Shape the Future of Quantum Computing",
  },
];

export const LandingSection6 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack mih="100vh" py={100}>
        {MD ? null : (
          <Image
            p="md"
            radius="xl"
            src="/quantum-security.webp"
            h="20vw"
            alt="pic"
          />
        )}
        <Title p={MD ? "" : "md"} ta="center" c={COLOR.TURQUOISE} fw={300} size="3vw" >
          Join Our Quantum Network{" "}
        </Title>
        <Text
          mx="auto"
          p={MD ? "" : "md"}
          ta="center"
          maw={700}
          size="1.2vw"
          c={COLOR.TURQUOISE}
        >
          The Quantum Network of Neocosmicx is an exclusive platform uniting
          quantum enthusiasts, professionals, researchers, and organizations
          from across the globe. By joining this dynamic community, you gain
          access to resources, collaborations, and opportunities to drive
          innovation and shape the future of quantum computing.{" "}
        </Text>
        <Space h={100} />
        <SimpleGrid cols={{ base: 1, md: 2 }} px={MD ? 150 : 20}>
          <Stack gap="xl">
            <Divider c={COLOR.TURQUOISE} />
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Grid>
                    <Grid.Col span={1}>
                      <IconCheck color={COLOR.TURQUOISE} />
                    </Grid.Col>
                    <Grid.Col span="auto">
                      <Text c={COLOR.TURQUOISE}>{item.title}</Text>
                    </Grid.Col>
                  </Grid>
                  <Divider />
                </>
              ))
            )}
            <Group>

            <CommonButton title="Join WhatsApp Group"
            href="https://chat.whatsapp.com/HYSWQzeSv6XLuj2KgM9cu6" />
            <CommonButton title="Join Discord Channel"
            href="https://discord.gg/snT8Na7f" />
            
            </Group>
            
          </Stack>
          <Group mx="auto">
            {MD ? (
              <AspectRatio ratio={11 / 9}>
                {/* Need to change */}
                <Image
                  radius="lg"
                  maw={700}
                  src="/quantum_network.jpeg"
                  alt="Group_of_people"
                />
              </AspectRatio>
            ) : null}
          </Group>
        </SimpleGrid>
      </Stack>
    </>
  );
};
