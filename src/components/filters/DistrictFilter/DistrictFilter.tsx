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

type DistrictFilterProps = {
  options?: FilterOptionProps[];
};
export const DistrictFilter = ({ options = [] }: DistrictFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Filter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Distrito"
        onClick={onOpen}
        leftIcon={<MapMarkerIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="scroll">
        <FilterHeader placeholder="Pesquisar por distrito" />
        <FilterBody h="28rem" overflowY="scroll" options={options} />
        <FilterFooter
          label={options.length > 1 ? 'Distritos' : 'Distrito'}
          value={options.length}
        />
      </FilterContent>
    </Filter>
  );
};
