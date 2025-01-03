import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  ActionIcon,
  CopyButton,
  Divider,
  Group,
  rem,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

export const ContactHero = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack align="center" mih="80vh" py={SIZE_CONFIG.SECTION_SPACE}>
        <Title
          size={MD ? '8vw' : '17vw'}
          tt="uppercase"
          fw="lighter"
          c={COLOR.TURQUOISE}
        >
          Get In
          <br />
          <Text span inherit fw="bold">
            Touch
          </Text>
        </Title>
        <Divider color={COLOR.TURQUOISE} />
        <Group>
          <Text tt="uppercase" c={COLOR.TURQUOISE}>
            info@neocosmicx.in
          </Text>
          <CopyButton value="info@neocosmicx.in" timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copied' : 'Copy'}
                withArrow
                position="right"
              >
                <ActionIcon
                  color={copied ? 'teal' : COLOR.TURQUOISE}
                  variant="subtle"
                  onClick={copy}
                >
                  {copied ? (
                    <IconCheck style={{ width: rem(16) }} />
                  ) : (
                    <IconCopy style={{ width: rem(16) }} />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>
        <Group>
          <Text tt="uppercase" c={COLOR.TURQUOISE}>
            +91 99822 56688
          </Text>
          <CopyButton value="+91 99822 56688" timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copied' : 'Copy'}
                withArrow
                position="right"
              >
                <ActionIcon
                  color={copied ? 'teal' : COLOR.TURQUOISE}
                  variant="subtle"
                  onClick={copy}
                >
                  {copied ? (
                    <IconCheck style={{ width: rem(16) }} />
                  ) : (
                    <IconCopy style={{ width: rem(16) }} />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>
        <Divider w={MD ? '20%' : '90%'} color={COLOR.TURQUOISE} />
        <Text ta="center" size={MD ? 'lg' : 'sm'} c={COLOR.TURQUOISE}>
          Get in touch with us to explore innovative solutions and
          collaborations.
        </Text>
      </Stack>
    </>
  );
};
