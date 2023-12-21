import { ReactNode } from 'react';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import 'swiper/css';

type Children = {
  name: string;
  url: string;
  suppliers: number[];
};
type TrousseauSliderProps = {
  children: ({ name, url }: Children) => ReactNode;
  trousseauList?: Trousseau['material_items'];
  swiperSlideProps?: SwiperSlideProps;
} & Omit<SwiperProps, 'children'>;

export const TrousseauSlider = ({
  trousseauList = [],
  children,
  swiperSlideProps,
  ...restProps
}: TrousseauSliderProps) => (
  <Swiper slidesPerView="auto" spaceBetween={20} {...restProps}>
    {trousseauList.map(({ id, name, photo, suppliers }) => (
      <SwiperSlide
        {...swiperSlideProps}
        style={{
          width: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.2rem',
          position: 'relative',
          ...swiperSlideProps?.style,
        }}
        key={id}
      >
        {children({ name, url: photo?.url, suppliers })}
      </SwiperSlide>
    ))}
  </Swiper>
);
