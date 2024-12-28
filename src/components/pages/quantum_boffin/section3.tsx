import { Button, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';

export const QuantumBoffinSection3 = () => {
    return (
        <>
            <SimpleGrid cols={{ base: 1, md: 2 }}>
                <Image src="/quantum-26.avif" alt="image" />
                <Stack align="righ">
                    <Title>How to Prepare?</Title>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim
                        temporibus harum accusamus officia debitis. In ut exercitationem
                        consectetur, laborum autem, quae veritatis optio inventore iusto
                        maiores fugiat ipsam eaque.
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim
                        temporibus harum accusamus officia debitis. In ut exercitationem
                    </Text>
                    <Button rightSection={<IconBook />} w='fit-content'>Register Now for 6000 ₹</Button>

                </Stack>
            </SimpleGrid>
        </>
    );
};
