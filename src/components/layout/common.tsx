import { Container, Stack } from '@mantine/core';
import { CommonHeader } from '../header/common';

type Props = {
  children: React.ReactNode;
};

export const CommonLayout = (props: Props) => {
  return (
    <>
      <Container size='2000px' p={0}>
        <Stack gap={0}>
          {/* <CommonHeader /> */}
          {props.children}
        </Stack>
      </Container>
    </>
  );
};
