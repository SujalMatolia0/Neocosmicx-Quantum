import { COLOR } from '@/configs/theme';
import {
  Container,
  Stack,
  Title,
  SimpleGrid,
  Divider,
  Text,
} from '@mantine/core';

interface Answer {
  text: string;
}

interface Props {
  data: {
    question: string;
    answer: {
      answer: Answer[];
    };
  }[];
}

export const CommonFaqAccredation = ({ data }: Props) => {
  return (
    <Container size="xl">
      <Stack align="center">
        <Title>Frequently Asked Questions</Title>

        <SimpleGrid cols={2}>
          {data.map((item, index) => (
            <Stack key={index}>
              <Title order={4}>{item.question}</Title>
              {item.answer.answer.map((arr, arrIndex) => (
                <Text key={arrIndex}>{arr.text}</Text>
              ))}
              <Divider size={1} color={COLOR.TURQUOISE} />
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
