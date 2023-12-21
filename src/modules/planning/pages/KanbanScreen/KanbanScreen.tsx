import { HStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetPlannings } from '@/api';
import { CustomerFilter } from '@/components';

import { KanbanSection } from './components';
import { getSectionPlannings } from './utils';

import 'swiper/css';

export const KanbanScreen = () => {
  const { data, isLoading, isFetching } = useGetPlannings();
  const plannings = data?.data ?? [];

  const { pendingPlannings, acceptedPlannings, revalidatedPlannings, refusedPlannings } =
    getSectionPlannings(plannings);

  const sections = [
    { title: 'Aguardando aprovação', titleColor: 'text.primary', plannings: pendingPlannings },
    { title: '"Recusados / A ajustar"', titleColor: 'red.danger_100', plannings: refusedPlannings },
    {
      title: 'Aguardando reaprovação',
      titleColor: 'yellow.warning_60',
      plannings: revalidatedPlannings,
    },
    { title: 'Aprovados', titleColor: 'text.brand', plannings: acceptedPlannings },
  ];

  return (
    <>
      <HStack w="100%" justify="flex-end">
        <CustomerFilter />
      </HStack>
      <Swiper slidesPerView="auto" spaceBetween={10}>
        {sections.map((section, index) => (
          <SwiperSlide key={section.title} style={{ width: 'fit-content', height: 'inherit' }}>
            <KanbanSection
              isLoading={isLoading || isFetching}
              plannings={section.plannings}
              titleColor={section.titleColor}
              title={section.title}
              border={index === sections.length - 1 ? 'none' : ''}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
