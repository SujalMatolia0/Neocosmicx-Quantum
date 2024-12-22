import { SIZE_CONFIG, COLOR } from '@/configs/theme';
import {
  Grid,
  Stack,
  Title,
  Group,
  Box,
  Divider,
  AspectRatio,
  Text,
  Image,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Children } from 'react';
import { CommonButton } from './common_button';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { useSizeHelper } from '@/lib/hooks/size_helper';

interface Props {
  title: string;
  text: string;
  button: string;
  image: string;
  data: {
    line: string;
  }[];
}

export const CommonHero = (props: Props) => {
  const size = useSizeHelper();
  const { MD } = useMediaQuerys();
  return (
    <>
      <Grid
        mih="calc(100vh - 5.7rem)"
        // mih="100vh"
        pt={SIZE_CONFIG.SECTION_SPACE}
        columns={10}
      >
        <Grid.Col
          style={{ zIndex: 1 }}
          span={{ base: 10, md: 5.5 }}
          pl={MD ? 130 : 'md'}
        >
          <Stack align="start">
            <Title fw={300} lh={1} c={COLOR.TURQUOISE} size={size.TITLE_1}>
              {props.title}
            </Title>
            <Text size={size.TEXT_1}>{props.text} </Text>
            <Group>
              {/* <CommonButton variant="outline" title="Become a Member" /> */}
              <CommonButton title="Update content" />
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
            <video
              style={{
                width: '100%',
                height: '25%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
              }}
              src="/wave.mp4"
              autoPlay
              loop
            />
            <Stack
              gap="sm"
              px={MD ? '60px' : 'md'}
              // pt={MD ? rem(80) : 'lg'}
              justify="end"
              style={{
                position: 'absolute',
                top: '10%',
                width: '100%',
                height: '80%',
              }}
            >
              <Divider color={COLOR.GRAY} />
              {Children.toArray(
                props.data.map((item) => (
                  <>
                    <Group>
                      <IconCheck color={COLOR.GRAY} />
                      <Text size={MD ? '1.2vw' : '4vw'} c={COLOR.PEACH}>
                        {item.line}
                      </Text>
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
            <AspectRatio mx="auto" ratio={9 / 17} mah="70vh" p={0} maw="50%">
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
