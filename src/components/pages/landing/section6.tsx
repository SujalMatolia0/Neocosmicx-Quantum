import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import {
  Divider,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    title: 'Title 1 sjdnak',
  },
  {
    title: 'Title 1',
  },
  {
    title: 'Title 1',
  },
  {
    title: 'Title 1',
  },
];

export const LandingSection6 = () => {
  return (
    <>
      <Stack  mih="100vh" py={100}>
        <Title ta="center" c={COLOR.TURQUOISE} fw={300}>
          Security Protocols
        </Title>
        <Text mx="auto" ta="center" maw={700} c={COLOR.TURQUOISE}>
          In TechSpeed’s 20+ year history, we have never lost a document,
          mismanaged an electronic data file, or had a breach of
          confidentiality. Our process includes:
        </Text>
        <Space h={80}/>
        <SimpleGrid cols={2} px={200}>
          <Stack gap="sm" >
            <Divider c={COLOR.TURQUOISE} />
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Grid>
                    <Grid.Col span={1}>
                      <IconCheck color={COLOR.TURQUOISE} />
                    </Grid.Col>
                    <Grid.Col span="auto">
                      <Text c={COLOR.TURQUOISE}>{item.title}</Text>
                    </Grid.Col>
                  </Grid>
                  <Divider />
                </>
              ))
            )}
            <CommonButton title='call us at night' />
          </Stack>
          <Group mx="auto">
            <Image src="https://picsum.photos/200/300" alt="pic" />
          </Group>
        </SimpleGrid>
      </Stack>
    </>
  );
};
