import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import {
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconBrandYoutube } from '@tabler/icons-react';
import { title } from 'process';
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
      <Container>
        <Divider color={COLOR.TURQUOISE} />
        <SimpleGrid cols={3}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                {item.icon}
                <Title pt="lg">{item.title}</Title>
                <Stack pt="lg">
                  <Text>{item.text}</Text>
                  <CommonButton
                    variant="outline"
                    title={item.button || 'View Project'}
                  />
                </Stack>
              </>
            ))
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
