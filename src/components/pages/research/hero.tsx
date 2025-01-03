import { BackgroundImage, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const ResearchHero = () => {
  return (
    <>
      <BackgroundImage src='/research_hero.jpeg'>

        <SimpleGrid p='md' mih="80vh" cols={2}>
          <Text>
            IBM Granite AI models are open sourced for innovation, <br /> tailored
            for business, and optimized for scale.
          </Text>
          <Stack h="80vh" align="end" justify="end">
            <Title size="10vw">Research.</Title>
          </Stack>
        </SimpleGrid>
      </BackgroundImage>
    </>
  );
};
