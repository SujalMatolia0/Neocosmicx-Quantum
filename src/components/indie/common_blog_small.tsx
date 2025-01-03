import { Button, Group, Image, Paper, Stack, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

interface Props {
    image?: string;
    title?: string;
    button: string;
    id: number;
    href: string;
}

export const CommonBlogSmall = (props: Props) => {
    return (
        <Paper
            component={Link}
            href={props.href}
            h={200}
            w={250}
            withBorder
            shadow="md"
            radius="md"
        >
            <Group align="flex-start">
                <Image
                    p={1}
                    h={120}
                    src={props.image}
                    w={120}
                    alt={props.title}
                    fit="cover"
                    radius="sm"
                />
                <Stack justify="space-between" h={120}>
                    <Text size="sm" >
                        {props.title}
                    </Text>
                    <Button
                        rightSection={<IconArrowRight />}
                        fullWidth
                        variant="subtle"
                        size="xs"
                        color="blue"
                    >
                        {props.button}
                    </Button>
                </Stack>
            </Group>
        </Paper>
    );
};
