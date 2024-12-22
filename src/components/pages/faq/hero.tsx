import { COLOR } from '@/configs/theme';
import { Accordion, Divider, Paper, Stack, Text, Title } from '@mantine/core';
import { Children } from 'react';
const DATA = [
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
  {
    title: 'How do I get started?',
    text: 'Give us a call and we can talk to you about your project and needs. We will then work with you to prepare a scope-of-work detailing your unique project needs and timeline. Upon your approval, we will begin development by assigning a project manager, assembling a team for your project, and scheduling a project kickoff.',
  },
];
export const FaqHero = () => {
  const items = DATA.map((item) => (
    <Accordion.Item key={item.title} value={item.title}>
      {/* <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control> */}
      <Accordion.Panel>{item.text}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <>
      <Stack>
        <Title ta="center">Frequently Asked Questions</Title>
        <Paper maw="50vw" bg={COLOR.PEACH}>
          {Children.toArray(
            DATA.map((item) => (
              <>
                <Divider />
                <Accordion>{items}</Accordion>
                <Text p="md">{item.text}</Text>
              </>
            ))
          )}
        </Paper>
      </Stack>
    </>
  );
};
