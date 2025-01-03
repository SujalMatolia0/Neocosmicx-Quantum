import { CommonBlogAction } from "@/components/indie/common_blog_action";
import { CommonBlogSmall } from "@/components/indie/common_blog_small";
import { COLOR, SIZE_CONFIG } from "@/configs/theme";
import { BlogData } from "@/lib/data/blog";
import {
  Button,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export const BlogHero = () => {
  return (
    <>
      <Stack
        py={SIZE_CONFIG.SECTION_SPACE}
        px="8%"
        bg={COLOR.GRAY}
        align="center"
      >
        <Title>Neocosmicx Spark</Title>
        <Text>Blog, News, and Events</Text>
      </Stack>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <Grid h="100vh" columns={10}>
          {/* Latest Section */}
          <Grid.Col span={3}>
            <Stack>
              <Title>Latest</Title>
              {BlogData.slice(0, 3).map((blog) => (
                <CommonBlogSmall
                  key={blog.id}
                  id={blog.id}
                  href={blog.href}
                  button="Read more"
                  title={blog.title}
                  image={blog.image}
                />
              ))}
            </Stack>
          </Grid.Col>

          {/* Feature Section */}
          <Grid.Col span="auto">
            <Stack>
              <Title>Feature</Title>
              <Image
                alt={BlogData[0].title}
                mah="40vh"
                w="100%"
                src={BlogData[0].image}
              />
              <Text size="lg">{BlogData[0].title}</Text>
              <Title size="h3">{BlogData[0].text}</Title>
              <Text>
                Learn more about the latest in technology, including
                {BlogData[0].tags?.join(", ")}.
              </Text>
              <Button
                rightSection={<IconArrowRight />}
                variant="outline"
                color="blue"
                component="a"
                href={BlogData[0].href}
              >
                Watch Now
              </Button>
            </Stack>
          </Grid.Col>

          {/* Editor's Picks Section */}
          <Grid.Col span={3}>
            <Stack>
              <Title>Editor&apos;s Picks</Title>
              {BlogData.slice(3, 6).map((blog) => (
                <CommonBlogSmall
                  key={blog.id}
                  id={blog.id}
                  href={blog.href}
                  button="Read more"
                  title={blog.title}
                  image={blog.image}
                />
              ))}
              <CommonBlogAction
                button="Read more"
                image={BlogData[6]?.image || "/default-image.avif"}
              />
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
