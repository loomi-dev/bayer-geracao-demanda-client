import { useDisclosure } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import { Customer } from '@/api';
import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterSearchInput,
  FilterOption,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, UserIcon } from '@/components/icons';
import { Mask } from '@/utils';

type CustomerFilterProps = {
  customers?: Customer[];
};

export const CustomerFilter = ({ customers = [] }: CustomerFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.farmer?.name?.includes(search) ||
      Mask.formatCNPJ(customer.farmer?.company_identifier).includes(search),
  );
  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Multiplicadores"
        onClick={onOpen}
        leftIcon={<UserIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem">
        <FilterSearchInput onChange={handleSearch} placeholder="Pesquisar por nome ou CNPJ" />
        <FilterBody h="28rem" overflowY="auto">
          {filteredCustomers.map((customer) => (
            <FilterOption
              key={customer.farmer?.id}
              label={customer.farmer?.name}
              subLabel={Mask.formatCNPJ(customer.farmer?.company_identifier)}
              value={customer.farmer?.company_identifier}
            />
          ))}
        </FilterBody>
        <FilterFooter
          label={customers.length > 1 ? 'Multiplicadores' : 'Multiplicador'}
          value={customers.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
