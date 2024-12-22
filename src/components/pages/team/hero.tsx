import { CommonButton } from '@/components/indie/common_button';
import { Group, Stack, Title } from '@mantine/core';

export const TeamHero = () => {
  return (
    <>
      <Stack p="md" justify="center" align="center" mih="60vh">
        <Title>We are the people who make untitled</Title>
        <Group>
          <CommonButton title="Book a Demo" />
          <CommonButton title="Start your free trial" />
        </Group>
      </Stack>
    </>
  );
};
