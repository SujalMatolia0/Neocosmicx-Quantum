import { Container, Title, SimpleGrid, Text, Accordion } from '@mantine/core';

interface Props {
  data: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export const CommonFaqAccredation = ({ data }: Props) => {
  return (
    <Container size="xl">
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Title>Frequently Asked Questions</Title>

        <Accordion>
          {data.map((item) => (
            <Accordion.Item key={item.id} value={item.id}>
              <Accordion.Control w={500}>{item.question}</Accordion.Control>
              <Accordion.Panel maw={500}>
                <Text size="sm" c="dimmed">
                  {item.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </SimpleGrid>
    </Container>
  );
};
