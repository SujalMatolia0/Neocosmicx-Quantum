import { CommonButton } from '@/components/indie/common_button';
import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import { MembershipType } from '@/lib/data/memberships';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import {
  BackgroundImage,
  Button,
  Center,
  Group,
  Image,
  List,
  ListItem,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

interface MembershipProps {
  Membership: MembershipType;
}

export const MembershipHero = (props: MembershipProps) => {
  const { MD } = useMediaQuerys()
  return (<>
    <Center>

      <BackgroundImage
        w="80%"
        py={SIZE_CONFIG.SECTION_SPACE}
        mih="80vh"
        src={props.Membership.bg_image || ''}
        radius="lg"
      >
        <Paper bg="transparent" mih="80vh">
          <Stack h="80vh" justify="center" align="center">
            <Text c={COLOR.GRAY}>{props.Membership.hero_heading || ''}</Text>
            <Title c={COLOR.GREEN}>{props.Membership.hero_heading || ''}</Title>
            <Stack maw={600} ta="center" gap="xs">
              {props.Membership.text?.map((line, index) => (
                <Text key={index} c={COLOR.GRAY}>
                  {line}
                </Text>
              ))}
            </Stack>
            <Group>
              {props.Membership.button?.map((value) =>
                <CommonButton variant="outline" key={value} title={value} />
              )}
            </Group>
          </Stack>
        </Paper>
      </BackgroundImage>

    </Center>

    {props.Membership.membership_name ? (
      <Stack mt={SIZE_CONFIG.SECTION_SPACE} py={SIZE_CONFIG.SECTION_SPACE} bg={COLOR.TURQUOISE}>
        <Title c={COLOR.PEACH} ta='center'>{props.Membership.membership_name}</Title>
        <SimpleGrid py={SIZE_CONFIG.SECTION_SPACE} px={MD ? '140' : 'xs'} cols={{ base: 1, md: 2 }}>
          <Group>
            <Image radius="lg" alt="pic" src="/section-one.jpeg" />
          </Group>
          <Stack pl={MD ? '80' : 'xs'}>
            <Title c={COLOR.PEACH}>
              {props.Membership.membership_type}
            </Title>
            {props.Membership.membership_points?.map((points) =>
              <>
                <List>
                  <ListItem>
                    <Text c={COLOR.PEACH}>
                      {points}
                    </Text>
                  </ListItem>
                </List>
              </>)}
            <Button variant='filled' color={COLOR.GREEN}>{props.Membership.membership_price_1}
            </Button>
          </Stack>
        </SimpleGrid>
      </Stack>
    ) : null}
    {props.Membership.membership_type_2 ? (
      <Stack py={SIZE_CONFIG.SECTION_SPACE} bg={COLOR.TURQUOISE}>
        <SimpleGrid py={SIZE_CONFIG.SECTION_SPACE} px={MD ? '140' : 'xs'} cols={{ base: 1, md: 2 }}>
          <Group>
            <Image radius="lg" alt="pic" src="/section-one.jpeg" />
          </Group>
          <Stack pl={MD ? '80' : 'xs'}>
            <Title c={COLOR.PEACH}>
              {props.Membership.membership_type_2}
            </Title>
            {props.Membership.membership_points?.map((points) =>
              <>
                <List>
                  <ListItem>
                    <Text c={COLOR.PEACH}>
                      {points}
                    </Text>
                  </ListItem>
                </List>
              </>)}
            <Button variant='filled' color={COLOR.GREEN}>{props.Membership.membership_price_2}
            </Button>
          </Stack>
        </SimpleGrid>
      </Stack>
    ) : null}
  </>
  );
};
