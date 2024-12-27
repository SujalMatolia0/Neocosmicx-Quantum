import { CommonButton } from '@/components/indie/common_button';
import { SIZE_CONFIG } from '@/configs/theme';
import {
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export const TrainingSection3 = () => {
  return (
    <>
      <Container mih="100vh" py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <SimpleGrid spacing="xl" cols={{ base: 1, md: 2 }}>
          <Image radius="lg" ml="auto" src="/quantum-25.avif" />
          <Stack maw={500} justify="center">
            <Title>Build Your AWS Cloud skills with Ramp-Up Guides</Title>
            <Text>
              Our downloadable Ramp-Up Guides offer a variety of resources to
              help build your skills and knowledge of the AWS Cloud. Each guide,
              features carefully selected digital training, classroom courses,
              videos, whitepapers, certifications and more to remove the
              guesswork of learning AWS.
            </Text>
            <CommonButton variant="outline" title="Get Guidance " />
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
