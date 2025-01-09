import { CommonSparkCard } from "@/components/indie/common_spark_card"

const cardData = [
    {
        image: "/quantum-25.avif",
        title: "Card Title 1",
        text: "Description for card 1.",
        heading: "test",
    },
    {
        image: "/quantum-25.avif",
        title: "Card Title 2",
        text: "Description for card 2.",
        heading: "test",
    },
    {
        image: "/quantum-25.avif",
        title: "Card Title 3",
        text: "Description for card 3.",
        heading: "test",
    },
    {
        image: "/quantum-25.avif",
        title: "Card Title 3",
        text: "Description for card 3.",
        heading: "test",
    },
];

export const BlogSection3 = () => {
    return (
        <>
            <CommonSparkCard cards={cardData} />
        </>
    )
}