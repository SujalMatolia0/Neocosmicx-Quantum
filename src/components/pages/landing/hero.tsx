import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import { useMediaQuerys } from '@filante/cobalt/hooks';
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
  const { MD } = useMediaQuerys();
  return (
    <>
      <Grid mih="100vh" py={SIZE_CONFIG.SECTION_SPACE} columns={10}>
        <Grid.Col span={5} pl={MD ? 130 : 'md'}>
          <Stack>
            <Title fw={300} lh={1} size={size.TITLE_1}>
              A Global Professional of Quantum
            </Title>
            <Text>Join Us to expertise your Quantum expertise </Text>
            <Group>
              <CommonButton variant="outline" title="Call us at night" />
              <CommonButton  title="Call us at night" />
            </Group>
          </Stack>

          {MD ? (
            <Box
              w={550}
              h={300}
              left={0}
              bottom={0}
              pos="absolute"
              bg={COLOR.TURQUOISE}
            >
              <Stack gap="sm" px={100} pt={100} justify="end">
                <Divider color={COLOR.GRAY} />
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
          ) : null}
        </Grid.Col>
        <Grid.Col span={5}></Grid.Col>
      </Grid>
    </>
  );
};
