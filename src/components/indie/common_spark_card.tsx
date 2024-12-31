import { COLOR, SIZE_CONFIG } from "@/configs/theme";
import { Button, Container, Image, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

interface CardProps {
    image: string;
    title: string;
    text: string;
    heading: string;
}

interface Props {
    cards: CardProps[];
}

export const CommonSparkCard = ({ cards }: Props) => {
    return (
        <Container size="xl">
            <Container py={SIZE_CONFIG.SECTION_SPACE} size="xl">
                <SimpleGrid cols={4}>
                    {cards.map((item, index) => (
                        <Paper key={index} maw="25vw" mah="90vh" p="lg" style={{ borderColor: COLOR.TURQUOISE }} withBorder>
                            <Stack mih="70vh" justify="space-between">
                                <Stack>
                                    <Image radius='lg' src={item.image} alt={item.title} />

                                    <Text size="xs" lh={1}>{item.heading}</Text>
                                    <Title size='lg' lh={1}>{item.title}</Title>
                                </Stack>

                                <Text fw="lighter">{item.text}</Text>
                                <Button
                                    fullWidth
                                    justify="space-between"
                                    rightSection={<IconChevronRight />}
                                    variant="transparent"
                                >
                                    Learn More
                                </Button>
                            </Stack>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Container>
    );
};
