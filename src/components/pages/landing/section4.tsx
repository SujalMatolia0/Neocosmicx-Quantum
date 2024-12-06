import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useSizeHelper } from '@/lib/hooks/size_helper';
import {
  Divider,
  Grid,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    title: 'Title 1',
    description: 'Description 1',
    btnTitle: 'Button 1',
    list: [
      'Credentialed: 85% of your staff will have a masters and 100% of them a high school degree as a minimum.',
      'Certified: 85% of your staff will have a masters and 100% of',
    ],
  },
];

export const LandingSection4 = () => {
  const size = useSizeHelper();
  return (
    <>
      <Stack
        mih="100vh"
        bg={COLOR.TURQUOISE}
        align="center"
        py={SIZE_CONFIG.SECTION_SPACE}
      >
        <Title c={COLOR.GRAY} fw={300} size={size.TITLE_1} maw={800} ta="center">
          Lets own a minority women business since 2002.
        </Title>
        {Children.toArray(
          DATA.map((item) => (
            <>
              <Paper m="100" p="xl">
                <Stack>
                  <Title c={COLOR.TURQUOISE} ta="center">
                    {item.title}
                  </Title>
                  <SimpleGrid cols={2} px={150}>
                    <Stack>
                      <Text c={COLOR.TURQUOISE}>{item.description}</Text>
                      <CommonButton title={item.btnTitle} />
                    </Stack>
                    <Stack>
                      <Divider />
                      {Children.toArray(
                        item.list.map((listItem) => (
                          <>
                            <Grid>
                              <Grid.Col span={1}>
                                <IconCheck color={COLOR.TURQUOISE} />
                              </Grid.Col>
                              <Grid.Col span="auto">
                                <Text c={COLOR.TURQUOISE}>{listItem}</Text>
                              </Grid.Col>
                            </Grid>
                            <Divider />
                          </>
                        ))
                      )}
                    </Stack>
                  </SimpleGrid>
                </Stack>
              </Paper>
            </>
          ))
        )}
      </Stack>
    </>
  );
};
