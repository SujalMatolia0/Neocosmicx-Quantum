import { CommonButton } from '@/components/indie/common_button';
import { SIZE_CONFIG, COLOR } from '@/configs/theme';
import {
  Container,
  BackgroundImage,
  Paper,
  Stack,
  Title,
  Text,
} from '@mantine/core';

export const QuantumScientistSection3 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <BackgroundImage
          w="100%"
          py={SIZE_CONFIG.SECTION_SPACE}
          mih="40vh"
          src="/accredation_scientist_1.jpeg"
          radius="lg"
        >
          <Paper bg="transparent" mih="50vh">
            <Stack h="80vh" justify="center" align="center">
              <Text c={COLOR.GRAY}>CVRCQRD</Text>
              <Title c={COLOR.GREEN}>Boost Your Career </Title>
              <Text ta="center" c={COLOR.GRAY}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque voluptas earum quod iure libero, sit voluptatum
              </Text>
              <Text ta="center" c={COLOR.GRAY}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque voluptas earum quod iure libero, sit voluptatum Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                voluptas earum quod iure libero, sit voluptatum
              </Text>
              <CommonButton variant="outline" color={COLOR.GREEN} title="Register Now" />
            </Stack>
          </Paper>
        </BackgroundImage>
      </Container>
    </>
  );
};
