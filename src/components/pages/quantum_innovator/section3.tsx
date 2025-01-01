import { Button, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconBook } from '@tabler/icons-react';

export const QuantumBoffinSection3 = () => {
    return (
        <>
            <SimpleGrid p='md' cols={{ base: 1, md: 2 }}>
                <Image radius='lg' src="https://img.freepik.com/free-photo/partner-paper-teamwork-holding-device_1262-2691.jpg?t=st=1735721464~exp=1735725064~hmac=573ffe7df93b6c385c3bcb3bba23f73101241a9af3880fbc6b4ea71b733e6669&w=826" alt="image" />
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
