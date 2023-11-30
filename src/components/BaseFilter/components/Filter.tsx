import { Popover, PopoverProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FilterProps = {
  children: ReactNode;
} & PopoverProps;

export const Filter = ({ children }: FilterProps) => <Popover>{children}</Popover>;
