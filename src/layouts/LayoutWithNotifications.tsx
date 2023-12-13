import { Flex, FlexProps } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';

import { Sidebar, NotificationBar } from '@/components';
import { LAYOUT_NOTIFICATION_BAR_WIDTH, LAYOUT_SIDEBAR_WIDTH } from '@/config';

type LayoutWithNotificationsProps = {
  title?: string;
  children: ReactNode;
} & FlexProps;

export const LayoutWithNotifications = ({
  title = 'Bayer - Top Multiplicadores',
  children,
  ...restProps
}: LayoutWithNotificationsProps) => (
  <>
    <Head>
      <title>{`${title}`}</title>
    </Head>

    <Flex minH="100%">
      <Sidebar />
      <Flex
        w={{
          lg: `calc(100% - (${LAYOUT_NOTIFICATION_BAR_WIDTH['lg']} + ${LAYOUT_SIDEBAR_WIDTH['lg']}))`,
          xl: `calc(100% - (${LAYOUT_NOTIFICATION_BAR_WIDTH['xl']} + ${LAYOUT_SIDEBAR_WIDTH['xl']}))`,
          '3xl': `calc(100% - (${LAYOUT_NOTIFICATION_BAR_WIDTH['3xl']} + ${LAYOUT_SIDEBAR_WIDTH['3xl']}))`,
        }}
        minH="100%"
        ml={LAYOUT_SIDEBAR_WIDTH}
        background="linear-gradient(110deg, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)"
        pt="5rem"
        pb="4rem"
        pl="5.5rem"
        pr="7rem"
        gap="5rem"
        align="flex-start"
        flexDir="column"
        {...restProps}
      >
        {children}
      </Flex>
      <NotificationBar />
    </Flex>
  </>
);
