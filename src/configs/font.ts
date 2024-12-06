import localFont from 'next/font/local';

const FKGmid = localFont({
  src: '../pages/fonts/FKGroteskTrial-Medium.woff2',
});

const FKGreg = localFont({
  src: '../pages/fonts/FKGroteskTrial-Regular.woff2',
});

const FKGR_mono = localFont({
  src: '../pages/fonts/FKGroteskSemiMonoTrial-Regular.woff2',
});

const FKG_mono = localFont({
  src: '../pages/fonts/FKGroteskSemiMonoTrial-Medium.woff2',
});

const Norm = localFont({
  src: '../pages/fonts/Norm-Light.woff2',
});

export const FONTS = {
  FKGM: FKGmid.style.fontFamily,
  FKGR: FKGreg.style.fontFamily,
  FKGR_MONO: FKGR_mono.style.fontFamily,
  FKG_MONO: FKG_mono.style.fontFamily,
  NORM: Norm.style.fontFamily,
};
