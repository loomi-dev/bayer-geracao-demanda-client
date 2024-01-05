import { useDisclosure } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { useGetDistricts } from '@/api/farmer/queries/useGetDistricts';
import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterSearchInput,
  FilterOption,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, MapMarkerIcon } from '@/components/icons';

type DistrictFilterProps = {
  selectedValues: string[];
  onSelect: Dispatch<SetStateAction<string[]>>;
};

export const DistrictFilter = ({ selectedValues, onSelect }: DistrictFilterProps) => {
  const session = useSession();
  const managerId = session.data?.user.manager?.id as number;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useGetDistricts({ managerId: 39 }, { enabled: Boolean(39) });
  const [search, setSearch] = useState('');
  const filterOptions = data?.data ?? [];

  const filteredDistricts = filterOptions.filter((filterOption) =>
    filterOption?.name?.includes(search),
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    const district = e.target.value;
    const isAlreadySelected = selectedValues.includes(district);
    if (isAlreadySelected) {
      onSelect(selectedValues.filter((item: string) => item !== district));
      return;
    }

    onSelect((districts) => [...districts, district]);
  };
  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Distrito"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="auto">
        <FilterSearchInput onChange={handleSearch} placeholder="Pesquisar por distrito" />
        <FilterBody h="28rem" overflowY="auto">
          {filteredDistricts.map((option) => (
            <FilterOption
              checkboxProps={{ onChange: handleSelectOption }}
              key={option.name}
              label={option.name}
              value={option.name}
            />
          ))}
        </FilterBody>
        <FilterFooter
          label={filteredDistricts.length > 1 ? 'Distritos' : 'Distrito'}
          value={filteredDistricts.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
