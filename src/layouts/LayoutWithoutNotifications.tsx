import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from './Sidebebar';

type LayoutWithoutNotificationsProps = {
  children: ReactNode;
};
export const LayoutWithoutNotifications = ({ children }: LayoutWithoutNotificationsProps) => (
  <Flex flex={1}>
    <Sidebar />
    {children}
  </Flex>
);
