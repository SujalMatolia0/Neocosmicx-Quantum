import { COLOR } from '@/configs/theme';
import { Group, Text, Title } from '@mantine/core';
import { CommonButton } from '../indie/common_button';
import { Children } from 'react';

const DATA = [
  {
    name: 'Memberships',
    link: 'https://example.com',
  },
  {
    name: 'Accreditations',
    link: 'https://example.com',
  },
  {
    name: 'Continuous Learning ',
    link: 'https://example.com',
  },
];

export const CommonHeader = () => {
  return (
    <>
      <Group px={80} py={40} justify="space-between">
        <Group gap="xl">
          <Title c={COLOR.TURQUOISE}>CVRCQRD</Title>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Text size='0.9vw' c={COLOR.TURQUOISE}>{item.name}</Text>
              </>
            ))
          )}
        </Group>
        <Group>
          <CommonButton variant="transparent" title="LogIn" />
          <CommonButton title="SignUp" />
        </Group>
      </Group>
    </>
  );
};
