import { HStack } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useGetCustomerPlanningsByUserId } from '@/api';
import { CustomerFilter, DistrictFilter, RegionFilter, SearchFilter } from '@/components';

import { KanbanSection } from './components';
import { getSectionPlannings } from './utils';
import 'swiper/css';

export const KanbanScreen = () => {
  const session = useSession();
  const managerId = session.data?.user.manager?.id as number;
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const { data, isLoading, isFetching } = useGetCustomerPlanningsByUserId(
    {
      filter: {
        regions,
        search,
        customers: selectedCustomers,
        districts,
      },
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
  const handleSearch = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    250,
  );
  return (
    <>
      <HStack w="100%" gap="1.6rem" justify="flex-end">
        <CustomerFilter selectedValues={selectedCustomers} onSelect={setSelectedCustomers} />
        <DistrictFilter selectedValues={districts} onSelect={setDistricts} />
        <RegionFilter selectedValues={regions} onSelect={setRegions} />
        <SearchFilter placeholder="Pesquisar por nome ou CNPJ" onChange={handleSearch} />
      </HStack>
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
    </>
  );
};
