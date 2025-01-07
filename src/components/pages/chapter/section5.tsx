import { SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Children } from 'react';

const DATA = [
  {
    no: '1',
    title: 'Emerging leaders.',
    text: ' We focus our efforts on individuals who are in the earlier phases of their career, those who have a track record of excellence but have not received a numerous other fellowships and accolades. We search for those who are not already on the global stage.',
  },
  {
    no: '1',
    title: 'Emerging leaders.',
    text: ' We focus our efforts on individuals who are in the earlier phases of their career, those who have a track record of excellence but have not received a numerous other fellowships and accolades. We search for those who are not already on the global stage.',
  },
  {
    no: '1',
    title: 'Emerging leaders.',
    text: ' We focus our efforts on individuals who are in the earlier phases of their career, those who have a track record of excellence but have not received a numerous other fellowships and accolades. We search for those who are not already on the global stage.',
  },
  {
    no: '1',
    title: 'Emerging leaders.',
    text: ' We focus our efforts on individuals who are in the earlier phases of their career, those who have a track record of excellence but have not received a numerous other fellowships and accolades. We search for those who are not already on the global stage.',
  },
];

export const ChapterSection5 = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack py={SIZE_CONFIG.SECTION_SPACE} align="center">
        <Title>Qualifications</Title>
        <Text maw={MD ? 700 : 300} ta="center">
          We look for the proximate emerging leaders working on-the-ground on
          world-changing ideas -- the doers, makers, inventors, technologists,
          filmmakers and photographers, musicians and artists, educators,
          scientists, entrepreneurs, nonprofit leaders, and human rights
          activists. Here is what we look for in a TED Fellow:
        </Text>
        <SimpleGrid p="md" cols={{ base: 1, md: 2 }}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Paper p="md" withBorder maw={700}>
                  <Group align="start">
                    <Text>{item.no}</Text>
                    <Text maw={MD ? 550 : 280} fw="bold">
                      {item.title}
                      <Text span inherit fw="lighter">
                        {item.text}
                      </Text>
                    </Text>
                  </Group>
                </Paper>
              </>
            ))
          )}
        </SimpleGrid>
      </Stack>
    </>
  );
};
