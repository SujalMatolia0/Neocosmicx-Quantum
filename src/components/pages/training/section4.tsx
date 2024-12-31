import { Accordion, Container, SimpleGrid, Stack, Title } from '@mantine/core';
const groceries = [
  {
    value: 'Questions',
    description: 'answer',
  },
  {
    value: 'Question',
    description: 'answer',
  },
  {
    value: 'Question',
    description: 'answer',
  },
  {
    value: 'Question',
    description: 'answer',
  },
  {
    value: 'Question',
    description: 'answer',
  },
  {
    value: 'Question',
    description: 'answer',
  },
];
export const TrainingSection4 = () => {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <Container size="xl" mih="90vh">
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Stack justify="center">
            <Title maw={500}>Benefits of AWS Training and Certification</Title>
          </Stack>
          <Accordion defaultValue="Apples">{items}</Accordion>
        </SimpleGrid>
      </Container>
    </>
  );
};
