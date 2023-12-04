import { Button, ButtonProps, PopoverTrigger } from '@chakra-ui/react';

type FilterTriggerProps = {
  label: string;
} & ButtonProps;

export const FilterTrigger = ({ label, ...props }: FilterTriggerProps) => (
  <PopoverTrigger>
    <Button minW="15.5rem" h="5rem" py="1.2rem" px="0.95rem" {...props}>
      {label}
    </Button>
  </PopoverTrigger>
);
