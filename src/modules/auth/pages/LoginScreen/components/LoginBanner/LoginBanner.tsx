import Image from 'next/image';

import bannerImage from '@/../public/assets/images/banner.webp';

export const LoginBanner = () => (
  <>
    <Image
      src={bannerImage}
      alt="Imagem de uma plantação"
      fill
      placeholder="blur"
      style={{
        zIndex: -1,
        objectFit: 'cover',
      }}
    />
  </>
);
