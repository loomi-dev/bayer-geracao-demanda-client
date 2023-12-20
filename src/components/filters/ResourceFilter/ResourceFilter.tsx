import { useDisclosure } from '@chakra-ui/react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterOption,
  FilterTrigger,
} from '@/components/BaseFilter';
import { CalendarIcon, ChevronDownIcon, ChevronTopIcon } from '@/components/icons';

const options = [
  { label: 'GD Inicial', value: '' },
  { label: 'GD Final', value: '' },
];

export const ResourceFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Origem do recurso"
        onClick={onOpen}
        leftIcon={<CalendarIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="auto">
        <FilterBody h="12rem" overflowY="auto">
          {options.map((option) => (
            <FilterOption key={option.value} label={option.label} value={option.value} />
          ))}
        </FilterBody>
      </FilterContent>
    </BaseFilter>
  );
};
