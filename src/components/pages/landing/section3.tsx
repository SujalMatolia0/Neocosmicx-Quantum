import { CommonCard } from '@/components/indie/common_card';
import { CommonSectionCard } from '@/components/indie/common_section_card';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { SimpleGrid, Stack, Text, Title } from '@mantine/core';

export const LandingSection3 = () => {
  return (
    <>
      <Stack pt={SIZE_CONFIG.SECTION_SPACE} align="center" mih="100vh">
        <Title fw={300} maw={600} ta="center" c={COLOR.TURQUOISE}>
          Our Accreditations
        </Title>
        <Text c="dimmed">
          Build a strong foundation and stand out as a Global Quantum Professional
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3, sm: 2 }}>
          <CommonCard
            href='/quantum_innovator_program'
            title="Quantum Innovator Program"
            image="/quantum_innovator.jpeg"
            description="Global validation of your quantum skills for aspiring learners"
            data={[{ title: 'Title 1' }, { title: 'Title 2' }]}
          />
          <CommonCard
            href='/certified_quantum_engineer'
            title="Certified Quantum Engineer"
            image="/quantum_engineer.jpeg"
            description="Industry recognized Certification for Quantum technology specialties"
            data={[{ title: 'Title 1' }, { title: 'Title 2' }]}
          />
          <CommonCard
            href='/charted_quantum_scientist'
            title="Chartered Quantum Scientist"
            image="/quantum_scientist.jpeg"
            description="Global recognition of Quantum for beginner"
            data={[{ title: 'Title 1' }, { title: 'Title 2' }]}
          />
        </SimpleGrid>

        <CommonSectionCard
          title="If you think you understand quantum mechanics, then you don't."
          writer="Sir Richard Feynman"
          image="/sir_richard.jpeg"
        />
      </Stack>
    </>
  );
};
