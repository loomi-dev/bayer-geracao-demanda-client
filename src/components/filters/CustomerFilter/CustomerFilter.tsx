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
import { ChevronDownIcon, ChevronTopIcon, UserIcon } from '@/components/icons';

type CustomerFilterProps = {
  options?: FilterOptionProps[];
};
export const CustomerFilter = ({ options = [] }: CustomerFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Filter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Clientes"
        onClick={onOpen}
        leftIcon={<UserIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem">
        <FilterHeader placeholder="Pesquisar por nome ou CNPJ" />
        <FilterBody h="28rem" overflowY="scroll" options={options} />
        <FilterFooter label={options.length > 1 ? 'Clientes' : 'Cliente'} value={options.length} />
      </FilterContent>
    </Filter>
  );
};
