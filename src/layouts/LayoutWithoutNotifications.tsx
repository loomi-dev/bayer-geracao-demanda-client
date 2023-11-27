import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from '@/components';

type LayoutWithoutNotificationsProps = {
  children: ReactNode;
};
export const LayoutWithoutNotifications = ({ children }: LayoutWithoutNotificationsProps) => (
  <>
    <Sidebar />

    <Box
      w="calc(100% - 28.7rem)"
      h="100%"
      ml="28.7rem"
      bgColor="greyscale.200"
      background="linear-gradient(110deg, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)"
    >
      {children}
    </Box>
  </>
);
