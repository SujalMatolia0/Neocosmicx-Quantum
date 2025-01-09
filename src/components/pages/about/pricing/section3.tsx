import { useMediaQuerys } from '@filante/cobalt/hooks';
import { AspectRatio, Grid, Image } from '@mantine/core';

export const PricingSection3 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Grid columns={10} p="md">
        <Grid.Col span={{ base: 0, md: 4.5 }}>
          {MD ? (
            <AspectRatio ratio={2 / 7}>
              <Image alt="image" radius="xl" mah={400} src="/quantum-27.webp" />
            </AspectRatio>
          ) : null}
        </Grid.Col>
        <Grid.Col span={{ base: 10, md: 5.5 }}>
          <AspectRatio ratio={2 / 7}>
            <Image alt="image" radius="xl" mah={400} src="/quantum-27.webp" />
          </AspectRatio>
        </Grid.Col>
      </Grid>
    </>
  );
};
