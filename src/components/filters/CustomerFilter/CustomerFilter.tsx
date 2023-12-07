import { useDisclosure } from '@chakra-ui/react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterSearchInput,
  FilterOption,
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
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Clientes"
        onClick={onOpen}
        leftIcon={<UserIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem">
        <FilterSearchInput placeholder="Pesquisar por nome ou CNPJ" />
        <FilterBody h="28rem" overflowY="auto">
          {options.map((option) => (
            <FilterOption
              key={option.value}
              label={option.label}
              subLabel={option.subLabel}
              value={option.value}
            />
          ))}
        </FilterBody>
        <FilterFooter label={options.length > 1 ? 'Clientes' : 'Cliente'} value={options.length} />
      </FilterContent>
    </BaseFilter>
  );
};
