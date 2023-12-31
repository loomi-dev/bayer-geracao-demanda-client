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
import { ChevronDownIcon, ChevronTopIcon, UserGroupIcon } from '@/components/icons';

type PartnerFilterProps = {
  options?: FilterOptionProps[];
};
export const PartnerFilter = ({ options = [] }: PartnerFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Parceiros"
        onClick={onOpen}
        leftIcon={<UserGroupIcon />}
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
        <FilterFooter
          label={options.length > 1 ? 'Parceiros' : 'Parceiro'}
          value={options.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
