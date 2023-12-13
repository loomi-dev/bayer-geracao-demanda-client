import { Flex, FlexProps } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';

import { Sidebar } from '@/components';
import { LAYOUT_SIDEBAR_WIDTH } from '@/config';

type LayoutWithoutNotificationsProps = {
  title?: string;
  children: ReactNode;
} & FlexProps;

export const LayoutWithoutNotifications = ({
  title = 'Bayer - Top Multiplicadores',
  children,
  ...restProps
}: LayoutWithoutNotificationsProps) => (
  <>
    <Head>
      <title>{`${title}`}</title>
    </Head>

    <Flex minH="100%">
      <Sidebar />
      <Flex
        w={{
          lg: `calc(100% - ${LAYOUT_SIDEBAR_WIDTH['lg']})`,
          xl: `calc(100% - ${LAYOUT_SIDEBAR_WIDTH['xl']})`,
          '3xl': `calc(100% - ${LAYOUT_SIDEBAR_WIDTH['3xl']})`,
        }}
        minH="100%"
        ml={LAYOUT_SIDEBAR_WIDTH}
        pt="5rem"
        pb="4rem"
        pl="5.9rem"
        pr="7.6rem"
        gap="5rem"
        align="flex-start"
        flexDir="column"
        background="linear-gradient(110deg, #D9D9D9 11.1%, rgba(217, 217, 217, 0.00) 46.44%)"
        {...restProps}
      >
        {children}
      </Flex>
    </Flex>
  </>
);
