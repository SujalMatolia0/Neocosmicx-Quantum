import { SIZE_CONFIG } from "@/configs/theme"
import { Stack, SimpleGrid, Paper, Title, Text, Container } from "@mantine/core"
import { Children } from "react"

const DATA = [
    {
        title: "who should take this exam",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente, maiores"
    },
    {
        title: "who should take this exam",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente, maiores"
    },
    {
        title: "who should take this exam",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente, maiores"
    },
]
export const QuantumBoffinSection2 = () => {
    return (
        <>
            <Container py={SIZE_CONFIG.SECTION_SPACE} size='xl' >
                <SimpleGrid spacing="xl" w="100%" cols={{ base: 1, md: 3 }}>
                    {Children.toArray(DATA.map((item) => (
                        <>
                            <Paper bg='transparent' maw={300}>
                                <Stack align="center">
                                    <Title ta='center' >{item.title}</Title>
                                    <Text ta='center' >{item.text}</Text>
                                </Stack>
                            </Paper>
                        </>
                    )))}
                </SimpleGrid>
            </Container>
        </>
    )
}