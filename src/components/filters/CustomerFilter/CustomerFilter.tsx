import { useDisclosure } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useState } from 'react';

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

export const CustomerFilter = () => {
  const session = useSession();
  const managerId = session.data?.user.manager?.id as number;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');
  const { data } = useGetFarmers({ managerId });
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const customers = data?.data ?? [];
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.users_permissions_user?.username?.includes(search) ||
      Mask.formatCNPJ(customer?.company_identifier ?? '').includes(search),
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
              key={customer?.id}
              label={customer.users_permissions_user?.username ?? ''}
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
