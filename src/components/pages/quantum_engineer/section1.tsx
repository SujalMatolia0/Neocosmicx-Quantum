import { List, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const QuantumEngineerSection1 = () => {
  return (
    <>
      <Stack align="center" justify="center" mih="80vh">
        <SimpleGrid spacing="100" cols={{ base: 1, md: 2 }}>
          <Stack>
            <Text ml="auto" maw="500px" ta="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              sapiente, maiores ratione velit quaerat beatae quos perspiciatis
              sunt illo ipsa labore fugiat, possimus architecto omnis pariatur,
              repellat numquam vero aspernatur.{' '}
            </Text>
            <Text ml="auto" maw="500px" ta="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              sapiente, maiores ratione velit quaerat beatae quos perspiciatis
              sunt illo ipsa labore fugiat, possimus architecto omnis pariatur,
              repellat numquam vero aspernatur.{' '}
            </Text>
            <Text ml="auto" maw="500px" ta="left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              sapiente, maiores ratione velit quaerat beatae quos perspiciatis
              sunt illo ipsa labore fugiat, possimus architecto omnis pariatur,
              repellat numquam vero aspernatur.{' '}
            </Text>
          </Stack>
          <Stack justify="center">
            <Stack>
              <Title>Exam Overview</Title>
              <List>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
                <List.Item fw="bold">
                  Format:
                  <Text span>{` `}Multiple Choice Question</Text>
                </List.Item>
              </List>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Stack>
    </>
  );
};
