import { CommonButton } from '@/components/indie/common_button';
import { COLOR } from '@/configs/theme';
import { Stack, Text, Title } from '@mantine/core';

export const PricingHero = () => {
  return (
    <>
      <Stack justify="center" mih="70vh" align="center">
        <Title c={COLOR.TURQUOISE}>Pricing</Title>
        <Text p="md" maw={900} ta="center" c={COLOR.GRAY}>
          We offer customized pricing based on your needs and the number of team
          members you require. Let us know what you&apos;re looking for and
          we&apos;ll work with you to create a plan that fits your budget.
        </Text>
        <CommonButton
          color={COLOR.TURQUOISE}
          title="Get Your Free Estimate Now"
        />
      </Stack>
    </>
  );
};
