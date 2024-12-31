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
            image="/charted-scientist.jpeg"
            description="Global validation of your quantum skills for aspiring learners"
            data={[{ title: 'Title 1' }, { title: 'Title 2' }]}
          />
          <CommonCard
            href='/certified_quantum_engineer'
            title="Certified Quantum Engineer"
            image="/certified-scientist.jpeg"
            description="Industry recognized Certification for Quantum technology specialties"
            data={[{ title: 'Title 1' }, { title: 'Title 2' }]}
          />
          <CommonCard
          href='/charted_quantum_scientist'
            title="Chartered Quantum Scientist"
            image="/workshop.jpeg"
            description="Global recognition of Quantum for beginner"
            data={[{ title: 'Title 1' }, { title: 'Title 2' }]}
          />{' '}
        </SimpleGrid>
        <CommonSectionCard
          title="A Quantum Leap in Research"
          description="As a quantum researcher, I've benefited greatly from CVRCQRD's platform. It's streamlined my work, boosted my skills, and fosters a collaborative environment. Highly recommended!"
          writer="Mr. Noor Ul Hasan"
          position="Quantum Researcher"
          image="https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        />
      </Stack>
    </>
  );
};
