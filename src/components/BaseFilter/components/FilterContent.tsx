import { PopoverContent, PopoverContentProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FilterContentProps = { children: ReactNode } & PopoverContentProps;

export const FilterContent = ({ children, ...props }: FilterContentProps) => (
  <PopoverContent {...props}>{children}</PopoverContent>
);
