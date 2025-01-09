import { CommonSectorCard } from '@/components/indie/common_sector_card';
import { CommonSectorHero } from '@/components/indie/common_sector_hero';
import { CommonSectorSection } from '@/components/indie/common_sector_section';
import { SIZE_CONFIG } from '@/configs/theme';
import { Container, SimpleGrid, Stack } from '@mantine/core';

interface Props {
  solution: {
    title: string;
    slug: string;
    description: string;
    heroImg: string;
    card: {
      title: string;
      href: string;
      description: string;
      features: {
        text: string;
      }[];
    }[];
    sectionTitle: string;
    href: string;
    sectionDes: string;
    sectionImg: string;
  };
}

export const CommonSolutions = (props: Props) => {
  return (
    <>
      <Stack>
        <CommonSectorHero
          image={props.solution.heroImg}
          title={props.solution.title}
          description={props.solution.description}
        />
        <Container size="xl" py={SIZE_CONFIG.SECTION_SPACE}>
          <SimpleGrid cols={{ base: 1, md: 3 }}>
            {props.solution.card.map((card) => (
              <>
                <CommonSectorCard
                  key={card.href}
                  title={card.title}
                  href={card.href}
                  description={card.description}
                  data={card.features}
                />
              </>
            ))}
          </SimpleGrid>
        </Container>
        <CommonSectorSection
          title={props.solution.sectionTitle}
          description={props.solution.sectionDes}
          image={props.solution.sectionImg}
        />
      </Stack>
    </>
  );
};
