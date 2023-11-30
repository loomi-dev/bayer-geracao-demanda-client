import { useDisclosure } from '@chakra-ui/react';

import {
  Filter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterOptionProps,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, FilterIcon } from '@/components/icons';

type ActionFilterProps = {
  options?: FilterOptionProps[];
};
export const ActionFilter = ({ options = [] }: ActionFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Filter isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Tipo de ação"
        onClick={onOpen}
        leftIcon={<FilterIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent>
        <FilterBody options={options} />
        <FilterFooter
          label={options.length > 1 ? 'Tipos de ações ' : 'Tipo de ação'}
          value={options.length}
        />
      </FilterContent>
    </Filter>
  );
};
