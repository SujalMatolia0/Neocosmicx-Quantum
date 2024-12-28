import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  BackgroundImage,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export const MembershipHero = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <BackgroundImage
          w="100%"
          py={SIZE_CONFIG.SECTION_SPACE}
          mih="80vh"
          src="/quantum-25.avif"
          radius="lg"
        >
          <Paper bg="transparent" mih="80vh">
            <Stack h="80vh" justify="center" align="center">
              <Text c={COLOR.GRAY}>CVRCQRD</Text>
              <Title c={COLOR.GREEN}>
                Join the worlds leading Quantum Professional Community
              </Title>
              <Text maw={600} ta="center" c={COLOR.GRAY}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque voluptas earum quod iure libero, sit voluptatum
                architecto, illo quaerat voluptatibus nulla veniam aliquid
                blanditiis accusamus eum tempora quisquam totam sint?
              </Text>
              <Group>
                <CommonButton variant="outline" title="Individual" />
                <CommonButton variant="outline" title="Institutional" />
                <CommonButton variant="outline" title="Student" />
              </Group>
            </Stack>
          </Paper>
        </BackgroundImage>
      </Container>
    </>
  );
};
