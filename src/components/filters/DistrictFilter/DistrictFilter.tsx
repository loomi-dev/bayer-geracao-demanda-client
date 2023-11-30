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

type DistrictFilterProps = {
  options?: FilterOptionProps[];
};
export const DistrictFilter = ({ options = [] }: DistrictFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Filter isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Distrito"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent>
        <FilterHeader placeholder="Pesquisar distrito" />
        <FilterBody options={options} />
      </FilterContent>
    </Filter>
  );
};
