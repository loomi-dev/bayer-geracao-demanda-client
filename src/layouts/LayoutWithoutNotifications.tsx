import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from '@/components/Sidebebar';

type LayoutWithoutNotificationsProps = {
  children: ReactNode;
};
export const LayoutWithoutNotifications = ({ children }: LayoutWithoutNotificationsProps) => (
  <>
    <Sidebar />

    <Box w="calc(100% - 28.7rem)" ml="28.7rem">
      {children}
    </Box>
  </>
);
