import { CommonSectorCard } from '@/components/indie/common_sector_card';
import { SIZE_CONFIG } from '@/configs/theme';
import { Container, SimpleGrid } from '@mantine/core';

export const QMLSection1 = () => {
  return (
    <>
      <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
        <SimpleGrid cols={{ bese: 1, md: 3 }}>
          <CommonSectorCard
            title="Drug Discovery"
            description="Take a look at our offers and find the right solution to solve your problem"
            data={[
              { list: 'Feature 1' },
              { list: 'Feature 1' },
              { list: 'Feature 1' },
            ]}
          />
          <CommonSectorCard
            title="Drug Discovery"
            description="Take a look at our offers and find the right solution to solve your problem"
            data={[
              { list: 'Feature 1' },
              { list: 'Feature 1' },
              { list: 'Feature 1' },
            ]}
          />
          <CommonSectorCard
            title="Drug Discovery"
            description="Take a look at our offers and find the right solution to solve your problem"
            data={[
              { list: 'Feature 1' },
              { list: 'Feature 1' },
              { list: 'Feature 1' },
            ]}
          />
        </SimpleGrid>
      </Container>
    </>
  );
};
