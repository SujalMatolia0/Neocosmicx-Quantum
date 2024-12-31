import { SIZE_CONFIG, COLOR } from "@/configs/theme"
import { Button, Stack, Text, Title } from "@mantine/core"
import { IconBook } from "@tabler/icons-react"

export const QuantumBoffinHero = () => {
    return (
        <>
            <Stack py={SIZE_CONFIG.SECTION_SPACE} px="8%" bg={COLOR.GRAY}>
                <Title>Quantum Innovator Program</Title>
                <Text maw={700}>
                    An international peer-reviewed and refereed journal on Quantum.
                    An international peer-reviewed and refereed journal on Quantum.
                    An international peer-reviewed and refereed journal on Quantum.
                </Text>
                <Button rightSection={<IconBook />} w='fit-content'>Register Now for 6000 ₹</Button>
            </Stack>
        </>
    )
}