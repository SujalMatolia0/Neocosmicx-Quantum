import { CommonButton } from '@/components/indie/common_button';
import {
  AspectRatio,
  Container,
  FileInput,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

export const SolutionHeroComingSoon = () => {
  return (
    <>
      <Container size="xl" py="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} mih="80vh">
          <Stack h="100%" justify="center" gap="md">
            <Title>R&D In Progress</Title>
            <Text>Work with us on R&D</Text>
            <form>
              <TextInput
                w="50%"
                label="Full Name"
                name='name'
                placeholder="Enter Your Full Name"
              />
              <TextInput
                w="50%"
                label="Email Address"
                placeholder="Enter Your Email"
              />
              <FileInput
                w="50%"
                accept="application/pdf"
                label="Upload Your Resume/CV Here"
                description="Max File Size 5 MB"
                placeholder="Click Here"
              />
            </form>
            <CommonButton title="submit" />
          </Stack>
          <Stack h="100%" justify="center">

          <AspectRatio ratio={12 / 11}>
            <Image radius="xl" src="/rnd-hero.jpeg" alt='contact' />
          </AspectRatio>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
