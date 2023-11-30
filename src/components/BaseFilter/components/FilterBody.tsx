import { PopoverBody, PopoverBodyProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FilterBodyProps = { children: ReactNode } & PopoverBodyProps;

export const FilterBody = ({ children, ...props }: FilterBodyProps) => (
  <PopoverBody {...props}>{children}</PopoverBody>
);
