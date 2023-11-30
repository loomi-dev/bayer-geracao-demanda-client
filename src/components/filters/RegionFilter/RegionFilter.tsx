import { useDisclosure } from '@chakra-ui/react';

import {
  Filter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterHeader,
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
    <Filter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Região"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="scroll">
        <FilterHeader placeholder="Pequisar por região" />
        <FilterBody h="28rem" overflowY="scroll" options={options} />
        <FilterFooter label={options.length > 1 ? 'Regiões' : 'Região'} value={options.length} />
      </FilterContent>
    </Filter>
  );
};
