import { Popover, PopoverProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FilterProps = {
  children: ReactNode;
} & PopoverProps;

export const Filter = ({ children, ...props }: FilterProps) => (
  <Popover {...props}>{children}</Popover>
);
