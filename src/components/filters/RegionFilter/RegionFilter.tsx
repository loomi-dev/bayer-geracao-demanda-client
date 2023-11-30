import { useDisclosure } from '@chakra-ui/react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterSearchInput,
  FilterOption,
  FilterOptionProps,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, MapMarkerIcon } from '@/components/icons';

type RegionFilterProps = {
  options?: FilterOptionProps[];
};
export const RegionFilter = ({ options = [] }: RegionFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Região"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="scroll">
        <FilterSearchInput placeholder="Pequisar por região" />
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
        <FilterFooter label={options.length > 1 ? 'Regiões' : 'Região'} value={options.length} />
      </FilterContent>
    </BaseFilter>
  );
};
