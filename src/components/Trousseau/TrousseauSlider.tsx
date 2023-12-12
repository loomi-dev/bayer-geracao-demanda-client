import { ReactNode } from 'react';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';

type TrousseauSliderProps = {
  children: (props: Pick<Trousseau, 'label' | 'image'>) => ReactNode;
  trousseauList: Trousseau[];
  swiperSlideProps?: SwiperSlideProps;
} & Omit<SwiperProps, 'children'>;

export const TrousseauSlider = ({
  trousseauList,
  children,
  swiperSlideProps,
  ...restProps
}: TrousseauSliderProps) => (
  <Swiper slidesPerView="auto" spaceBetween={20} {...restProps}>
    {trousseauList.map(({ id, label, image }) => (
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
        {children({ label, image })}
      </SwiperSlide>
    ))}
  </Swiper>
);
