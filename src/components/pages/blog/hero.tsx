import { CommonBlogAction } from '@/components/indie/common_blog_action';
import { CommonBlogSmall } from '@/components/indie/common_blog_small';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import {
  Button,
  Container,
  Grid,
  Image,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';

export const BlogHero = () => {
  const size = useSizeHelper();
  return (
    <>
      <Stack py={SIZE_CONFIG.SECTION_SPACE} px="8%" bg={COLOR.GRAY}>
        <Title>Neocosmicx Spark</Title>
        <Text>Blog, News and Events</Text>
      </Stack>
      <Container size="xl">
        <Grid gutter={8} h='100vh' columns={10}>
          <Grid.Col span="auto">
            <Stack>
              <Title>Latest</Title>
              <CommonBlogAction button="Read more" image="/quantum-25.avif" />
              <CommonBlogSmall
                button="Read more"
                title="What is streaming"
                image="/quantum-25.avif"
              />
              <CommonBlogSmall
                button="Read more"
                title="What is streaming"
                image="/quantum-25.avif"
              />
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack>
              <Title>Feature</Title>
              <Image mah='40vh' w="100%" src="/quantum-25.avif" />
              <Text>Transformers Podcast</Text>
              <Title>There year to get open source right</Title>
              <Text>
                The year to get your open source right. Host Ann Funai talks
                with Marco Bill-Peter of Red Hat about finding the mix of open
                source and proprietary tech, getting the right infrastructure in
                place, and making sure people have the skills to use it all.
              </Text>
              <Button rightSection={<IconArrowRight />} variant="transparent">
                Watch Now
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span="auto">
            <Stack>
              <Stack>
                <Title>Editors'picks</Title>
                <CommonBlogSmall
                  button="Read more"
                  title="What is streaming"
                  image="/quantum-25.avif"
                />
                <CommonBlogSmall
                  button="Read more"
                  title="What is streaming"
                  image="/quantum-25.avif"
                />
                <CommonBlogAction button="Read more" image="/quantum-25.avif" />
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
