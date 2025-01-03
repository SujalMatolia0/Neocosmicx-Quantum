import { SIZE_CONFIG } from "@/configs/theme"
import { useMediaQuerys } from "@filante/cobalt/hooks"
import { Image, SimpleGrid, Stack, Text, Title } from "@mantine/core"

export const QuantumBoffinHero = () => {
    const { MD } = useMediaQuerys()
    return (
        <>

            <SimpleGrid py={SIZE_CONFIG.SECTION_SPACE}
                mah="100vh"
                px={MD ? '140' : 'xs'}
                cols={{ base: 1, md: 2 }}
            >
                <Stack py="xl">
                    <Title>Quantum Innovator <br /> Program</Title>
                    <Text>
                        Get hands-on experience with quantum computing in PennyLane–from
                        quantum chemistry to quantum machine learning–using our exclusive
                        coding challenges.
                    </Text>
                </Stack>
                {MD ? <Image radius="lg" src="/innovator_accredation.jpeg" alt="image" /> : null}
            </SimpleGrid >

        </>
    )
}