import { CommonFeatureCard } from "@/components/indie/common_feature_card"
import { SIZE_CONFIG } from "@/configs/theme"
import { Container, SimpleGrid, Stack, Text } from "@mantine/core"

export const BlogSection1 = () => {
    return (
        <>
            <Container py={SIZE_CONFIG.SECTION_SPACE} size='xl'>
                <Stack>
                    <Text>Feature</Text>
                    <SimpleGrid spacing={0} cols={{ base: 1, md: 4 }}>
                        <CommonFeatureCard title='feature' text='test the feature card using dummy text' image='/quantum-25.avif' />
                        <CommonFeatureCard title='feature' text='test the feature card using dummy text' image='/quantum-25.avif' />
                        <CommonFeatureCard title='feature' text='test the feature card using dummy text' image='/quantum-25.avif' />
                        <CommonFeatureCard title='feature' text='test the feature card using dummy text' image='/quantum-25.avif' />

                    </SimpleGrid>
                </Stack>
            </Container>
        </>
    )
}