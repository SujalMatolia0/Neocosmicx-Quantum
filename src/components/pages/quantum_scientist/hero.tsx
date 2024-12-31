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

export const QuantumScientistHero = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <BackgroundImage
          w="100%"
          py={SIZE_CONFIG.SECTION_SPACE}
          mih="40vh"
          src="/quantum-25.avif"
          radius="lg"
        >
          <Paper bg="transparent" mih="50vh">
            <Stack h="80vh" justify="center" align="center">
              <Text c={COLOR.GRAY}>CVRCQRD</Text>
              <Title c={COLOR.GREEN}>
                Charted Associate Quantum Scientist{' '}
              </Title>
              <Text ta="center" c={COLOR.GRAY}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque voluptas earum quod iure libero, sit voluptatum
              </Text>
              <CommonButton variant="outline" title="Register Now" />
            </Stack>
          </Paper>
        </BackgroundImage>
      </Container>
    </>
  );
};
