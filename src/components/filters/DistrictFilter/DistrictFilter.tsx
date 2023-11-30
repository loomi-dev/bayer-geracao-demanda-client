import { useDisclosure } from '@chakra-ui/react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterHeader,
  FilterOption,
  FilterOptionProps,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, MapMarkerIcon } from '@/components/icons';

type DistrictFilterProps = {
  options?: FilterOptionProps[];
};
export const DistrictFilter = ({ options = [] }: DistrictFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Distrito"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="scroll">
        <FilterHeader placeholder="Pesquisar por distrito" />
        <FilterBody h="28rem" overflowY="scroll">
          {options.map((option) => (
            <FilterOption
              key={option.value}
              label={option.label}
              subLabel={option.subLabel}
              value={option.value}
            />
          ))}
        </FilterBody>
        <FilterFooter
          label={options.length > 1 ? 'Distritos' : 'Distrito'}
          value={options.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
