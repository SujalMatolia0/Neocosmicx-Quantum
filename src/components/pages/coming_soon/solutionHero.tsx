import React, { useState } from 'react';
import {
  Button,
  Container,
  TextInput,
  Stack,
  Title,
  Text,
  SimpleGrid,
  AspectRatio,
  Image,
} from '@mantine/core';

export const SolutionHeroComingSoon = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmissionStatus('Form submitted successfully!');
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error: any) {
      setSubmissionStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container size="xl" py="xl">
      <SimpleGrid cols={{ base: 1, md: 2 }} mih="80vh">
        <Stack h="100%" justify="center" gap="md">
          <Title>R&D In Progress</Title>
          <Text>Work with us on R&D</Text>
          <form onSubmit={handleSubmit}>
            <TextInput
              w="50%"
              label="Full Name"
              name="fullName"
              placeholder="Enter Your Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <TextInput
              w="50%"
              label="Email Address"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextInput
              w="50%"
              label="Message"
              name="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
          {submissionStatus && <Text>{submissionStatus}</Text>}
        </Stack>
        <Stack h="100%" justify="center">
          <AspectRatio ratio={12 / 11}>
            <Image radius="xl" src="/rnd-hero.jpeg" alt="contact" />
          </AspectRatio>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
