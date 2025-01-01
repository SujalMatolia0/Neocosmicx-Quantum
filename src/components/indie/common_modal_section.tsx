import { COLOR } from '@/configs/theme';
import { Stack, Text } from '@mantine/core';
import Link from 'next/link';

interface Props {
  data: (
    | {
      title?: string;
      list: {
        text: string;
        link: string;
      }[];
    }
    | {
      title: string;
      description: string;
    }
  )[];
}

export const CommonMenuSection = ({ data }: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <Stack key={index} justify="flex-start" h="100%" maw={200}>
          <Text c={COLOR.TURQUOISE} size="lg">
            {item?.title}
          </Text>

          {'list' in item &&
            item.list.map((listItem, listIndex) => (
              <Text
                key={listIndex}
                component={Link}
                href={listItem.link}
                size="sm"
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  // backgroundColor: "#487568",
                  transition: 'color 0.3s ease, background-color 0.3s ease',
                  padding: '4px', // Added padding for better hover visibility
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = 'underline';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = 'none';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {listItem.text}
              </Text>
            ))}

          {'description' in item && (
            <Text
              size="sm"
              c={COLOR.GRAY}
              style={{
                position: 'relative',
                cursor: 'default',
                transition: 'color 0.3s ease, background-color 0.3s ease',
                padding: '4px', // Added padding for better hover visibility
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLOR.TURQUOISE;
                e.currentTarget.style.backgroundColor = '#01373d'; // Hover background color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLOR.GRAY;
                e.currentTarget.style.backgroundColor = 'transparent'; // Reset background color
              }}
            >
              {item.description}
            </Text>
          )}
        </Stack>
      ))}
    </>
  );
};
