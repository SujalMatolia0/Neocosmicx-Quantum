import { Button, Image, Paper, Stack } from "@mantine/core";

interface Props {
    image: string;
    button: string;
}

export const CommonBlogAction = (props: Props) => {
    return (
        <>

            <Paper h={150} w={250}>
                <Stack h={150} w={250} gap={0}>
                    <Image alt="image" h={120} src={props.image} />
                    <Button>{props.button}</Button>
                </Stack>
            </Paper>
        </>
    )
}