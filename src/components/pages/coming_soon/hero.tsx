import { COLOR } from '@/configs/theme';
import { Center, Title } from '@mantine/core';

export const ComingSoonHero = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '89vh',
        overflow: 'hidden',
      }}
    >
      <video
        src="/comingsoonbg.mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      <Center
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Title size="10vw" c={COLOR.TURQUOISE}>
          Coming Soon
        </Title>
      </Center>
    </div>
  );
};
