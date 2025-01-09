import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Center,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Children } from 'react';

const DATA = [
  {
    title: 'On-Shore Client Support Manager',
    text: 'We simplify the client experience with local project support. You will have one dedicated US-based contact for project setup, piloting, and ongoing management.',
  },
  {
    title: 'On-Shore Client Support Manager',
    text: 'We simplify the client experience with local project support. You will have one dedicated US-based contact for project setup, piloting, and ongoing management.',
  },
  {
    title: 'On-Shore Client Support Manager',
    text: 'We simplify the client experience with local project support. You will have one dedicated US-based contact for project setup, piloting, and ongoing management.',
  },
  {
    title: 'On-Shore Client Support Manager',
    text: 'We simplify the client experience with local project support. You will have one dedicated US-based contact for project setup, piloting, and ongoing management.',
  },
  {
    title: 'On-Shore Client Support Manager',
    text: 'We simplify the client experience with local project support. You will have one dedicated US-based contact for project setup, piloting, and ongoing management.',
  },
];
export const PricingSection2 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Center mih="100vh" p="md">
        <SimpleGrid p="md" spacing="xl" cols={{ base: 1, md: 2 }}>
          <Stack maw={300}>
            <Title>Building your custom estimate</Title>
            <Text>
              We understand that every project is unique, and we tailor our
              pricing accordingly. We take into account factors such as project
              volume, duration, and processing requirements to provide you with
              a customized estimate.
            </Text>
            <CommonButton
              title="Start Building your Team "
              color={COLOR.PEACH}
            />
          </Stack>
          <Stack>
            <Text size="xl">Every one of our projects include:</Text>
            <Divider size={1} />
            {Children.toArray(
              DATA.map((item) => (
                <>
                  <Group gap="sm" align="start">
                    <IconCheck />
                    <Stack maw={MD ? 400 : '70vw'}>
                      <Text fw="bold" size="sm">
                        {item.title}
                      </Text>
                      <Text size="xs">{item.text}</Text>
                      <Divider color="#ada7b2" size={1} />
                    </Stack>
                  </Group>
                </>
              ))
            )}
          </Stack>
        </SimpleGrid>
      </Center>
    </>
  );
};
