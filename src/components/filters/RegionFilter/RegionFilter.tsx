import { useDisclosure } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterOption,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, MapMarkerIcon } from '@/components/icons';

const regionFilterOptions = [
  { label: 'Sul Leste' },
  { label: 'Sul Oeste' },
  { label: 'Centro' },
  { label: 'Paraná' },
  { label: 'Cerrado Oeste' },
  { label: 'Cerrado Leste' },
];

type RegionFilterProps = {
  selectedValues: string[];
  onSelect: Dispatch<SetStateAction<string[]>>;
};
export const RegionFilter = ({ selectedValues, onSelect }: RegionFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    const region = e.target.value;
    const isAlreadySelected = selectedValues.includes(region);
    if (isAlreadySelected) {
      onSelect(selectedValues.filter((item: string) => item !== region));
      return;
    }

    onSelect((regions) => [...regions, region]);
  };
  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Regional"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="auto">
        <FilterBody h="28rem" overflowY="auto">
          {regionFilterOptions.map((option) => (
            <FilterOption
              onCheckboxClick={handleSelectOption}
              key={option.label}
              label={option.label}
              value={option.label}
            />
          ))}
        </FilterBody>
        <FilterFooter
          label={regionFilterOptions.length > 1 ? 'Regiões' : 'Região'}
          value={regionFilterOptions.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
