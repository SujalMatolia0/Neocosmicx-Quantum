import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import { Box, Divider, Grid, Group, Stack, Text, Title } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    text: 'Scalable Back Office Support Teams',
  },
  {
    text: 'Scalable Back Office Support Teams',
  },
  {
    text: 'Scalable Back Office Support Teams',
  },
];
export const LandingHero = () => {
  const size = useSizeHelper();
  return (
    <>
      <Grid  mih="83vh" py={SIZE_CONFIG.SECTION_SPACE} columns={10}>
        <Grid.Col span={4} pl={130}>
          <Stack>
            <Title fw={300} lh={1} size={size.TITLE_1}>
              All-in-one outsourcing
            </Title>
            <Text>Human powered, AI-enhanced outsourcing services.</Text>
            <Group>
              <CommonButton variant="outline" title="Call us at night" />

              <CommonButton title="Call us at night" />
            </Group>
          </Stack>
          <Box
            w={550}
            h={300}
            left={0}
            bottom={0}
            pos="absolute"
            bg={COLOR.TURQUOISE}
          >
            <Stack gap='sm' px={100} pt={100} justify='end'>
              <Divider color={COLOR.GRAY}/>
              {Children.toArray(
                DATA.map((item) => (
                  <>
                    <Group>
                      <IconCheck color={COLOR.GRAY} />
                      <Text c={COLOR.PEACH}>{item.text}</Text>
                    </Group>
                    <Divider />
                  </>
                ))
              )}
            </Stack>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}></Grid.Col>
      </Grid>
    </>
  );
};
