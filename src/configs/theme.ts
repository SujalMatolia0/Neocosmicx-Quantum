import { createTheme, MantineSpacing, rem } from '@mantine/core';
import { FONTS } from './font';

export const COLOR = {
  TURQUOISE: '#01373d',
  PEACH: '#f2e0c9',
  GRAY: '#cec7ff',
  GREEN: '#c1f43d',
  PURPLE: '#521B5B',
};

export const SIZE_CONFIG: {
  PADDING_X: MantineSpacing;
  PADDING_MO: MantineSpacing;
  SECTION_SPACE: string;
} = {
  PADDING_X: 50,
  PADDING_MO: 10,
  SECTION_SPACE: rem(90),
};

export const MantineTheme = createTheme({
  fontFamily: FONTS.FKGM,
  fontFamilyMonospace: FONTS.FKGR_MONO,

  headings: {
    fontFamily: FONTS.NORM,
  },

  components:{
    Button: {
      defaultProps:{
        color: COLOR.TURQUOISE,
        ff: FONTS.FKGR_MONO,
        fw: 300,
      }
    },


  },

  defaultRadius: 'md',
  autoContrast: true,
  primaryColor: 'blue',
});
