import { Swiper, SwiperSlide } from 'swiper/react';

import { KanbanSection } from './components';

import 'swiper/css';

export const KanbanScreen = () => (
  <>
    <Swiper slidesPerView="auto" spaceBetween={10}>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection label="Aguardando aprovação" />
      </SwiperSlide>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection label="Recusados / A ajustar" />
      </SwiperSlide>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection label="Aguardando reaprovação" />
      </SwiperSlide>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection label="Aprovados" border="none" />
      </SwiperSlide>
    </Swiper>
  </>
);
