import { useDisclosure } from '@chakra-ui/react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterOption,
  FilterOptionProps,
  FilterTrigger,
} from '@/components/BaseFilter';
import { SlidersIcon } from '@/components/icons';

type FilterProps = {
  options?: FilterOptionProps[];
};
export const Filter = ({ options = [] }: FilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BaseFilter variant="secondary" placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="secondary-filter"
        py="2rem"
        px="2.4rem"
        w="15.7rem"
        fontWeight="bold"
        h="6.8rem"
        label="Filtrar"
        onClick={onOpen}
        leftIcon={<SlidersIcon />}
      />
      <FilterContent w="28rem" overflowY="scroll">
        <FilterBody h="28rem" overflowY="scroll">
          {options.map((option) => (
            <FilterOption
              key={option.value}
              label={option.label}
              value={option.value}
              border="unset"
              checkBoxStyle={{ variant: 'round' }}
            />
          ))}
        </FilterBody>
      </FilterContent>
    </BaseFilter>
  );
};
