import Image from 'next/image';

import bannerImage from '@/../public/assets/images/banner.webp';

export const AuthBanner = () => (
  <Image
    src={bannerImage}
    alt="Imagem de uma plantação"
    fill
    quality={100}
    placeholder="blur"
    style={{
      zIndex: -1,
      objectFit: 'cover',
    }}
  />
);
