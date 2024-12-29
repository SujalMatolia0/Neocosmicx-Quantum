import { COLOR, SIZE_CONFIG } from "@/configs/theme"
import { useMediaQuerys } from "@filante/cobalt/hooks"
import { SimpleGrid, Paper, Stack, Text, Group, Image, Container, Button, ActionIcon } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react";


interface Props {
    image: string;
    title: string;
    text: string;

}
export const CommonFeatureCard = (props: Props) => {
    const { MD } = useMediaQuerys()
    return (
        <>



            <Paper h={150} w={250} withBorder style={{ borderColor: COLOR.TURQUOISE }} >
                <SimpleGrid spacing={6} h='100%' w='100%' cols={2}>
                    <Image h='100%' w='100%' src={props.image} />
                    <Stack justify="space-between" gap={2}>
                        <Text>{props.title}</Text>
                        <Text size="xs">{props.text}</Text>
                        <ActionIcon variant="transparent" c={COLOR.TURQUOISE}><IconArrowRight /></ActionIcon>
                    </Stack>
                </SimpleGrid>
            </Paper>

        </>
    )
}