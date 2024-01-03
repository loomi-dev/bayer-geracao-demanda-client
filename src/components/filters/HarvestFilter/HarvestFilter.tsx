import { useDisclosure } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { useGetHarvests } from '@/api';
import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterSearchInput,
  FilterOption,
  FilterTrigger,
} from '@/components/BaseFilter';
import { CalendarIcon, ChevronDownIcon, ChevronTopIcon } from '@/components/icons';

type HarvestFilterProps = {
  selectedValues: string[];
  onSelect: Dispatch<SetStateAction<string[]>>;
};
export const HarvestFilter = ({ selectedValues, onSelect }: HarvestFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useGetHarvests();
  const [search, setSearch] = useState('');
  const harvests = data?.data ?? [];
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const harvestOptions = harvests.filter((option) => option?.year?.includes(search));

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    const harvest = e.target.value;
    const isAlreadySelected = selectedValues.includes(harvest);
    if (isAlreadySelected) {
      onSelect(selectedValues.filter((item: string) => item !== harvest));
      return;
    }

    onSelect((harvests) => [...harvests, harvest]);
  };
  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Safra"
        onClick={onOpen}
        leftIcon={<CalendarIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" h="25rem" overflowY="auto">
        <FilterSearchInput onChange={handleSearch} placeholder="Pesquisar por safra" />
        <FilterBody h="25rem" overflowY="auto">
          {harvestOptions.map((option) => (
            <FilterOption
              checkboxProps={{ onChange: handleSelectOption }}
              key={option.year}
              label={option.year ?? ''}
              value={option.year ?? ''}
            />
          ))}
        </FilterBody>
        <FilterFooter
          label={harvestOptions.length > 1 ? 'Safras' : 'Safra'}
          value={harvestOptions.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
