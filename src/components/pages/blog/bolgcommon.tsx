import { COLOR } from "@/configs/theme";
import { BlogType } from "@/lib/data/blog";
import { Badge, Container, Image, Text, Title } from "@mantine/core";

interface BlogProps {
    BlogData: BlogType;
}

export const BlogCommon = ({ BlogData }: BlogProps) => {
    return (
        <>
            <Container>
                <Title>{BlogData.title}</Title>
                <Image src={BlogData.image} alt={BlogData.title || "Blog image"} />
                {BlogData.tags?.length ? (
                    <div style={{ paddingTop: "10px" }}>
                        {BlogData.tags.map((tag, index) => (
                            <Badge key={index} c={COLOR.TURQUOISE} color={COLOR.GREEN} m={4}>
                                {tag}
                            </Badge>
                        ))}
                    </div>
                ) : null}
                <Text pt='lg'>{BlogData.text}</Text>
            </Container>
        </>
    );
};
