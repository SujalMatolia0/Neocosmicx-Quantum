import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  AspectRatio,
  BackgroundImage,
  Box,
  Divider,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
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
      <Grid
        mih="calc(100vh - 5.7rem)"
        py={SIZE_CONFIG.SECTION_SPACE}
        columns={10}
      >
        <Grid.Col
          style={{ zIndex: 1 }}
          span={{ base: 10, md: 5.5 }}
          pl={MD ? 130 : 'md'}
        >
          <Stack align="start">
            <Title fw={300} lh={1} c={COLOR.TURQUOISE} size={size.TITLE_1}>
              A Global Expert of Quantum
            </Title>
            <Text size={size.TEXT_1}>
              Join Us to expertise your Quantum expertise
            </Text>
            <Group>
              <CommonButton variant="outline" title="Become a Member" />
              <CommonButton title="Quantum Platform" />
            </Group>
          </Stack>

          <Box
            w={MD ? '40%' : '100%'}
            h={MD ? '40%' : '30%'}
            left={0}
            bottom={0}
            pos="absolute"
            bg={COLOR.TURQUOISE}
          >
            <Stack
              gap="sm"
              px={MD ? '60px' : 'md'}
              pt={MD ? '65px' : 'lg'}
              justify="end"
            >
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
        </Grid.Col>
        <Grid.Col p={0} span={4.5}>
          {MD ? (
            <AspectRatio ratio={9 / 16} p={0} maw={250}>
              <Image src="/hero-removebg.png" alt="image" />
            </AspectRatio>
          ) : (
            <></>
          )}
        </Grid.Col>
      </Grid>
    </>
  );
};
