import { useSession } from 'next-auth/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetCustomerPlanningsByUserId } from '@/api';

import { KanbanSection } from './components';
import { getSectionPlannings } from './utils';

import 'swiper/css';

export const KanbanScreen = () => {
  const session = useSession();
  const managerId = session.data?.user.manager?.id as number;
  const { data, isLoading, isFetching } = useGetCustomerPlanningsByUserId(
    {
      managerId,
    },
    { enabled: Boolean(managerId) },
  );
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
    { title: 'Aprovados', titleColor: 'green.100', plannings: acceptedPlannings },
  ];

  return (
    <Swiper slidesPerView="auto" style={{ height: '100%' }} spaceBetween={10}>
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
  );
};
