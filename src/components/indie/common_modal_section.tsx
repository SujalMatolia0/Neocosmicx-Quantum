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
              >
                {listItem.text}
              </Text>
            ))}

          {'description' in item && (
            <Text size="sm" c={COLOR.GRAY}>
              {item.description}
            </Text>
          )}

          {/* <Text
            td="underline"
            c={COLOR.GREEN}
            component={Link}
            href="/coming_soon"
            size="xs"
          >
            Coming Soon <IconArrowRight size={ICON_SIZE.XS} />
          </Text> */}
        </Stack>
      ))}
    </>
  );
};
