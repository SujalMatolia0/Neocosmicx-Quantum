import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
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
    title: 'Backup and Recovery',
  },
  {
    title: 'Regular Audits',
  },
  {
    title: 'Access Control',
  },
  {
    title: 'Data Encryption',
  },
];

export const LandingSection6 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack mih="100vh" py={100}>
        {MD ? null : (
          <Image
            p="md"
            radius="xl"
            src="/quantum-security.webp"
            h="20vw"
            alt="pic"
          />
        )}
        <Title p={MD ? '' : 'md'} ta="center" c={COLOR.TURQUOISE} fw={300}>
          Security Protocols
        </Title>
        <Text
          mx="auto"
          p={MD ? '' : 'md'}
          ta="center"
          maw={700}
          c={COLOR.TURQUOISE}
        >
          At CVRCQRD, we adhere to the highest security standards to protect
          your research data, intellectual property, and sensitive information.
          Our robust protocols ensure the utmost confidentiality, integrity, and
          availability across all operations. Our process includes:{' '}
        </Text>
        <Space h={80} />
        <SimpleGrid cols={{ base: 1, md: 2 }} px={MD ? 200 : 20}>
          <Stack gap="sm">
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
            <CommonButton title="call us for Support" />
          </Stack>
          <Group mx="auto">
            {MD ? (
              <Image radius="lg" src="/quantum-security.webp" alt="pic" />
            ) : null}
          </Group>
        </SimpleGrid>
      </Stack>
    </>
  );
};
