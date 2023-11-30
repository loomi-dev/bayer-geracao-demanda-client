import { Filter, FilterProps } from '../Filter';
import { SearchIcon } from '../icons';
import { TextInput } from '../TextInput';

type SearchFilterProps = {
  placeholder?: string;
} & FilterProps;

export const SearchFilter = ({ label, placeholder, leftIcon, options = [] }: SearchFilterProps) => (
  <Filter
    label={label}
    leftIcon={leftIcon}
    options={options}
    popoverBodyStyle={{ height: '30rem', overflowY: 'scroll' }}
  >
    <TextInput
      variant="primary"
      borderRadius="1.6rem"
      color="text.primary"
      py="1.2rem"
      bgColor="surface.primary"
      placeholder={placeholder}
      leftIcon={<SearchIcon />}
    />
  </Filter>
);
