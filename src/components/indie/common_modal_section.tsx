import { COLOR } from '@/configs/theme';
import { Stack, Text } from '@mantine/core';
import Link from 'next/link';

interface Props {
  data: (
    | {
        title: string;
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
        <Stack align="start" key={index} maw={200} justify="start">
          <Text c={COLOR.TURQUOISE} size="lg">
            {item.title}
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
                  transition: 'color 0.3s ease, background-color 0.3s ease',
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
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLOR.TURQUOISE;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLOR.GRAY;
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
