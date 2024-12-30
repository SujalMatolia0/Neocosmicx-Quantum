import { COLOR } from "@/configs/theme"
import { SimpleGrid, Paper, Stack, Text, Image, ActionIcon } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react";


interface Props {
    image: string;
    title: string;
    text: string;

}
export const CommonFeatureCard = (props: Props) => {
    return (
        <>




            <Paper h={150} w={250} withBorder style={{ borderColor: COLOR.TURQUOISE }} >
                <SimpleGrid spacing={6} h='100%' w='100%' cols={2}>
                    <Image alt="image" h='100%' w='100%' src={props.image} />
                    <Stack justify="space-between" gap={2}>
                        <Text p={1}>{props.title}</Text>
                        <Text p={1} size="xs">{props.text}</Text>
                        <ActionIcon variant="transparent" c={COLOR.TURQUOISE}><IconArrowRight /></ActionIcon>
                    </Stack>
                </SimpleGrid>
            </Paper>

        </>
    )
}