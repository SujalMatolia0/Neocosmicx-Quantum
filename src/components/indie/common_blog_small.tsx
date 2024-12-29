import { Button, Group, Image, Paper, Stack, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

interface Props {
    image: string;
    title: string;
    button: string;
}

export const CommonBlogSmall = (props: Props) => {
    return (
        <>
            <Paper h={200} w={250} withBorder>
                <Group gap={0} justify='space-between'>
                    <Image p={1} h={150} src={props.image} w={120} alt="image" />
                    <Stack justify='space-between' h={120}>
                        <Text size='sm'>{props.title}</Text>
                        <Button rightSection={<IconArrowRight />} fullWidth justify='space-between' variant='transparent' size='compact-xs'>{props.button}</Button>
                    </Stack>
                </Group>
            </Paper>
        </>
    );
};
