import { CommonButton } from '@/components/indie/common_button';
import { Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const SolutionSection1 = () => {
  return (
    <>
      <SimpleGrid p="md" cols={{ base: 1, md: 2 }}>
        <Image radius="lg" src="/quantum-27.webp" alt="image" />
        <Stack>
          <Title>Ai Data driven</Title>
          <Text>
            TechSpeed’s AI-driven data extraction tools leverage the latest
            advancements in artificial intelligence and optical character
            recognition (OCR) technology. By combining the power of AI language
            models with sophisticated OCR, our tools enable fast, accurate
            digitization and extraction of both printed and handwritten content
            from a wide range of document formats.TechSpeed can extract
            information with unmatched speed and accuracy.
          </Text>
          <CommonButton title="Build your team now" />
        </Stack>
      </SimpleGrid>
    </>
  );
};
