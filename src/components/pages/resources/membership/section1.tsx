import { SIZE_CONFIG } from '@/configs/theme';
import {
  Container,
  SimpleGrid,
  Paper,
  Stack,
  Title,
  Text,
  Image,
  Button,
  AspectRatio,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { Children } from 'react';

const DATA = [
  {
    image: '/individual_membership.jpeg',
    title: 'Individual',
    href: "/membership/1",
    text: 'If you’re passionate about quantum computing and eager to explore its potential, this membership is your starting point. Stay ahead in your industry by exploring how quantum computing can transform your business and skillset.',
  },
  {
    image: '/student_membershipjpeg.jpeg',
    title: 'Student', 
    href: "/membership/3",
    text: 'Gain access to beginner-friendly tutorials, advanced quantum programming guides, and white papers to fuel your academic and personal growth. Connect with like-minded students, researchers, and industry experts through our global quantum community.',
  },
  {
    image: '/enterprise_membership.jpeg',
    title: 'Enterprise', 
    href: "/membership/2",
    text: 'Access bespoke quantum tools and resources that address your organizations unique challenges and objectives. Receive an in-depth evaluation of your businesss potential for adopting and implementing quantum technologies.',
  },
];
export const MembershipSection1 = () => {
  return (
    <>
      <Container size="xl">
        <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
          <SimpleGrid cols={3}>
            {Children.toArray(
              DATA.map((item) => (

                <Paper component={Link} href={item.href} maw="25vw" mah="90vh" p="lg" withBorder>
                  <Stack mih="70vh" justify="space-between">
                    <Stack>
                      <AspectRatio ratio={11 / 9}>

                        <Image src={item.image} alt="image" />
                      </AspectRatio>
                      <Title lh={1}>{item.title}</Title>
                      <Text fw="lighter">{item.text}</Text>
                    </Stack>
                    <Button
                      fullWidth
                      justify="space-between"
                      rightSection={<IconChevronRight />}
                      variant="transparent"
                    >
                      Learn More{' '}
                    </Button>
                  </Stack>
                </Paper>
              ))
            )}
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};
