import { useDisclosure } from '@chakra-ui/react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterOption,
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
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Tipo de ação"
        onClick={onOpen}
        leftIcon={<FilterIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem">
        <FilterBody h="18rem" overflowY="scroll">
          {options.map((option) => (
            <FilterOption key={option.value} label={option.label} value={option.value} />
          ))}
        </FilterBody>
        <FilterFooter
          label={options.length > 1 ? 'Tipos de ações ' : 'Tipo de ação'}
          value={options.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
