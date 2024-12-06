import { sizeHelper } from '@filante/cobalt/hooks';

export const useSizeHelper = sizeHelper(({ mq, rem }) => ({
  TITLE_1: mq({
    base: rem('3vw'),
    md: rem('4.5vw'),
  }),
}));
