import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetPlannings } from '@/api';

import { KanbanSection } from './components';

import 'swiper/css';

export const KanbanScreen = () => {
  const { data, isLoading } = useGetPlannings();
  const plannings = data?.data ?? [];

  const { pendingPlannings, acceptedPlannings, revalidatePlannings, refusedPlannings } =
    plannings.reduce(
      (
        { pendingPlannings, acceptedPlannings, refusedPlannings, revalidatePlannings },
        planning,
      ) => {
        const planningStatus = planning.historic?.at(-1)?.status;
        const isFirstTimeEvaluating = planning.historic?.length === 1;

        if (planningStatus === 'ready_for_evaluation' && isFirstTimeEvaluating) {
          pendingPlannings.push(planning);
        }
        if (planningStatus === 'ready_for_evaluation' && !isFirstTimeEvaluating) {
          revalidatePlannings.push(planning);
        }
        if (planningStatus === 'accepted') {
          acceptedPlannings.push(planning);
        }
        if (planningStatus === 'rejected') {
          refusedPlannings.push(planning);
        }
        return { pendingPlannings, acceptedPlannings, revalidatePlannings, refusedPlannings };
      },
      {
        pendingPlannings: [] as Planning[],
        refusedPlannings: [] as Planning[],
        acceptedPlannings: [] as Planning[],
        revalidatePlannings: [] as Planning[],
      },
    );

  return (
    <Swiper slidesPerView="auto" spaceBetween={10}>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection plannings={pendingPlannings} label="Aguardando aprovação" />
      </SwiperSlide>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection
          plannings={refusedPlannings}
          label="Recusados / A ajustar"
          titleColor="red.danger_100"
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection
          plannings={revalidatePlannings}
          label="Aguardando reaprovação"
          titleColor="yellow.warning_60"
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: 'fit-content', height: 'fit-content' }}>
        <KanbanSection
          label="Aprovados"
          plannings={acceptedPlannings}
          titleColor="green.100"
          border="none"
        />
      </SwiperSlide>
    </Swiper>
  );
};
