import { useDisclosure } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

import {
  BaseFilter,
  FilterBody,
  FilterContent,
  FilterFooter,
  FilterSearchInput,
  FilterOption,
  FilterTrigger,
} from '@/components/BaseFilter';
import { CalendarIcon, ChevronDownIcon, ChevronTopIcon } from '@/components/icons';

const options = [{ label: '23/24', value: '23/24' }];

export const HarvestFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const harvestOptions = options.filter((option) => option.label.includes(search));

  return (
    <BaseFilter placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <FilterTrigger
        variant="primary-filter"
        label="Safra"
        onClick={onOpen}
        leftIcon={<CalendarIcon />}
        rightIcon={isOpen ? <ChevronTopIcon /> : <ChevronDownIcon />}
      />
      <FilterContent w="28rem" overflowY="auto">
        <FilterSearchInput onChange={handleSearch} placeholder="Pesquisar por safra" />
        <FilterBody h="28rem" overflowY="auto">
          {harvestOptions.map((option) => (
            <FilterOption key={option.value} label={option.label} value={option.value} />
          ))}
        </FilterBody>
        <FilterFooter
          label={harvestOptions.length > 1 ? 'Safras' : 'Safra'}
          value={harvestOptions.length}
        />
      </FilterContent>
    </BaseFilter>
  );
};
