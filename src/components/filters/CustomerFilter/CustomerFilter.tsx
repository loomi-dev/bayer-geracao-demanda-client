import { useDisclosure } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { useGetFarmers } from '@/api';
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
  selectedValues: string[];
  onSelect: Dispatch<SetStateAction<string[]>>;
};
export const CustomerFilter = ({ selectedValues, onSelect }: CustomerFilterProps) => {
  const session = useSession();
  const managerId = session.data?.user.manager?.id as number;
  const { data } = useGetFarmers({ managerId }, { enabled: Boolean(managerId) });

  const [search, setSearch] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const customers = data?.data ?? [];
  const filteredCustomers = customers.filter(
    (customer) =>
      customer?.company_name?.includes(search) ||
      Mask.formatCNPJ(customer?.company_identifier ?? '').includes(search),
  );

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    const customer = e.target.value;
    const isAlreadySelected = selectedValues.includes(customer);
    if (isAlreadySelected) {
      onSelect(selectedValues.filter((item: string) => item !== customer));
      return;
    }

    onSelect((customers) => [...customers, customer]);
  };

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
              checkboxProps={{ onChange: handleSelectOption }}
              key={customer?.id}
              label={customer.company_name ?? ''}
              subLabel={Mask.formatCNPJ(customer.company_identifier)}
              value={customer.company_identifier}
            />
          ))}
        </FilterBody>
        <FilterFooter
          label={filteredCustomers.length > 1 ? 'Multiplicadores' : 'Multiplicador'}
          value={filteredCustomers.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
