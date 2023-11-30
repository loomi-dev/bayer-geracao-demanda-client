import { useDisclosure } from '@chakra-ui/react';

import {
  Filter,
  FilterBody,
  FilterContent,
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
    <Filter isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Região"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent>
        <FilterHeader placeholder="Pequisar região" />
        <FilterBody options={options} />
      </FilterContent>
    </Filter>
  );
};
