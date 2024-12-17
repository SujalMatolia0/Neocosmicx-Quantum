import { sizeHelper } from '@filante/cobalt/hooks';

export const useSizeHelper = sizeHelper(({ mq, rem }) => ({
  TITLE_1: mq({
    base: rem('13vw'),
    md: rem('4.5vw'),
  }),
}));
