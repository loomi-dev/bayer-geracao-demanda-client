import { useDisclosure } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterOption,
  FilterTrigger,
} from '@/components/BaseFilter';
import { ChevronDownIcon, ChevronTopIcon, FilterIcon } from '@/components/icons';

type ActionFilterProps = {
  selectedValues: string[];
  onSelect: Dispatch<SetStateAction<string[]>>;
};

const actionFilterOptions = [
  { label: 'Ação de relacionamento', value: 'relationship_task' },
  { label: 'Ação de campo', value: 'farm_task' },
  { label: 'Ação de enxoval', value: 'farm_kit' },
];
export const ActionFilter = ({ selectedValues, onSelect }: ActionFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSelectOption = (e: ChangeEvent<HTMLInputElement>) => {
    const action = e.target.value;
    const isAlreadySelected = selectedValues.includes(action);
    if (isAlreadySelected) {
      onSelect(selectedValues.filter((item: string) => item !== action));
      return;
    }

    onSelect((actions) => [...actions, action]);
  };
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
        <FilterBody h="18rem" overflowY="auto">
          {actionFilterOptions.map((option) => (
            <FilterOption
              checkboxProps={{ onChange: handleSelectOption }}
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </FilterBody>
        <FilterFooter
          label={actionFilterOptions.length > 1 ? 'Tipos de ações ' : 'Tipo de ação'}
          value={actionFilterOptions.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
