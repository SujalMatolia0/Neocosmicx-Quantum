import { SIZE_CONFIG, COLOR } from "@/configs/theme"
import { useMediaQuerys } from "@filante/cobalt/hooks";
import { Center, Stack, Title, SimpleGrid, Paper, Group, AspectRatio, Text, Image, ActionIcon } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react";
import { Children } from "react"
const DATA = [
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
    {
        text: 'Outline and align project scope.',
        image: '/q-ml.png',
    },
];
export const BlogSection2 = () => {
    const { MD } = useMediaQuerys();
    return (
        <>
            <Center py={SIZE_CONFIG.SECTION_SPACE} mih="100vh" bg={COLOR.TURQUOISE}>
                <Stack align="left">
                    <Title c={COLOR.GREEN}>Explore more topics</Title>
                    <SimpleGrid miw="90vw" p="md" spacing={0} cols={{ base: 1, md: 3 }}>
                        {Children.toArray(
                            DATA.map((item) => (
                                <>
                                    <Paper
                                        p="md"
                                        bg="transparent"
                                        style={{ borderColor: COLOR.GREEN }}
                                        radius={0}
                                        withBorder
                                        mih={150}
                                    >
                                        <Stack
                                            h='100%'
                                            justify="space-between"
                                        >
                                            <Group justify="end">
                                                <AspectRatio ratio={2 / 2}>
                                                    <Image
                                                        mah={MD ? '4vw' : '15vw'}
                                                        src={item.image}
                                                        alt="image"
                                                    />
                                                </AspectRatio>
                                            </Group>
                                            <Group justify="space-between" >
                                                <Text c={COLOR.PEACH}>{item.text}</Text>
                                                <ActionIcon c={COLOR.PEACH} variant="transparent"><IconArrowRight /></ActionIcon>
                                            </Group>
                                        </Stack>
                                    </Paper>
                                </>
                            ))
                        )}
                    </SimpleGrid>
                </Stack>
            </Center>
        </>
    )
}