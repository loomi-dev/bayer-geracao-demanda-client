import { useDisclosure } from '@chakra-ui/react';

import {
  Filter,
  FilterBody,
  FilterContent,
  FilterOptionProps,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, UserIcon } from '@/components/icons';

type CustomerFilterProps = {
  options?: FilterOptionProps[];
};
export const CustomerFilter = ({ options = [] }: CustomerFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Filter isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Clientes"
        onClick={onOpen}
        leftIcon={<UserIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent>
        <FilterBody options={options} />
      </FilterContent>
    </Filter>
  );
};
