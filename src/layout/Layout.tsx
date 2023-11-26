import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from './Sidebebar';

type LayoutProps = {
  children: ReactNode;
};
export const Layout = ({ children }: LayoutProps) => (
  <Flex flex={1}>
    <Sidebar />
    {children}
  </Flex>
);
