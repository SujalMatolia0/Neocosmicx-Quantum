import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  Container,
  Divider,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconBrandYoutube } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    icon: <IconBrandYoutube />,
    title: 'Bee Agent Framework',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores non consectetur perspiciatis? Beatae, cum nisi repudiandae possimus ipsa perferendis.',
    button: 'view Project',
  },
  {
    icon: <IconBrandYoutube />,
    title: 'Bee Agent Framework',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores non consectetur perspiciatis? Beatae, cum nisi repudiandae possimus ipsa perferendis.',
    button: 'view Project',
  },
  {
    icon: <IconBrandYoutube />,
    title: 'Bee Agent Framework',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores non consectetur perspiciatis? Beatae, cum nisi repudiandae possimus ipsa perferendis.',
    button: 'view Project',
  },
];
export const ResearchSection2 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE}>
        <Grid columns={10}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Grid.Col span={10}>
                  <Divider color={COLOR.TURQUOISE} />
                </Grid.Col>
                <Grid.Col span="auto">{item.icon}</Grid.Col>
                <Grid.Col span={3}>
                  <Title pt="lg">{item.title}</Title>
                </Grid.Col>
                <Grid.Col span={5}>
                  <Stack pt="lg">
                    <Text>{item.text}</Text>
                    <CommonButton
                      variant="outline"
                      title={item.button || 'View Project'}
                    />
                  </Stack>
                </Grid.Col>
              </>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};
