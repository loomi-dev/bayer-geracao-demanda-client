import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Sidebar } from '@/components';
import { LAYOUT_SIDEBAR_WIDTH } from '@/config';

type LayoutWithoutNotificationsProps = {
  children: ReactNode;
};
export const LayoutWithoutNotifications = ({ children }: LayoutWithoutNotificationsProps) => (
  <>
    <Sidebar />
    <Box
      w={`calc(100% - ${LAYOUT_SIDEBAR_WIDTH})`}
      h="100%"
      ml={LAYOUT_SIDEBAR_WIDTH}
      background="linear-gradient(110deg, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)"
    >
      {children}
    </Box>
  </>
);
