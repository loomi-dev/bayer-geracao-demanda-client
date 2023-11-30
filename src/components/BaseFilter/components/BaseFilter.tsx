import { Popover, PopoverProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type BaseFilterProps = {
  children: ReactNode;
} & PopoverProps;

export const BaseFilter = ({ children, ...props }: BaseFilterProps) => (
  <Popover {...props}>{children}</Popover>
);
