import { Box, Button, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';

import { useGetNotificationsByUser } from '@/api';
import { LAYOUT_NOTIFICATION_BAR_WIDTH } from '@/config';

import { ArrowRightIcon } from '../icons';

import { HeaderNotificationBar } from './HeaderNotificationBar';
import { NotificationCard } from './NotificationCard';
import { NotificationCardSkeleton } from './NotificationCardSkeleton';

const DynamicNotificationsDrawer = dynamic(async () => {
  const { NotificationsDrawer } = await import('./NotificationsDrawer');

  return NotificationsDrawer;
});

export const NotificationBar = () => {
  const session = useSession();
  const userId = session.data?.user?.id as number;
  const {
    data: dataGetNotificationsByUser,
    isLoading: isLoadingGetNotificationsByUser,
    isFetching: isFetchingGetNotificationsByUser,
  } = useGetNotificationsByUser(
    {
      userId,
      pagination: {
        page: 1,
        pageSize: 5,
      },
    },
    {
      enabled: Boolean(userId),
    },
  );

  const notifications = dataGetNotificationsByUser?.data ?? [];
  const isLoadingNotifications =
    isLoadingGetNotificationsByUser || isFetchingGetNotificationsByUser;

  const {
    isOpen: isOpenNotificationsDrawer,
    onOpen: onOpenNotificationsDrawer,
    onClose: onCloseNotificationsDrawer,
  } = useDisclosure();

  return (
    <Flex
      w={{
        lg: LAYOUT_NOTIFICATION_BAR_WIDTH['lg'],
        xl: LAYOUT_NOTIFICATION_BAR_WIDTH['xl'],
        '3xl': LAYOUT_NOTIFICATION_BAR_WIDTH['3xl'],
      }}
      h="100%"
      bg="transparent"
      position="fixed"
      right={0}
      pl="2.8rem"
      pr="5.2rem"
      pt="5rem"
      pb="2rem"
    >
      <Box
        w="1px"
        h="inherit"
        opacity="0.4"
        bgGradient="linear(to-t,rgba(174, 174, 174, 0.00) 9.13%, rgba(147, 147, 147, 0.88) 43.47%, rgba(174, 174, 174, 0.00) 81.67%)"
        position="absolute"
        left="0"
        top="0rem"
      />
      <Flex w="100%" gap="5rem" flexDir="column">
        <HeaderNotificationBar />

        <VStack w="full" align="flex-start" spacing="1rem">
          {isLoadingNotifications ? (
            <Fragment>
              {Array.from({ length: 5 }).map((_, i) => (
                <NotificationCardSkeleton key={i} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {notifications?.map(({ id, totalPlanning, missingPlanning, safra: { year } }) => (
                <NotificationCard
                  harvestYear={year ?? ''}
                  totalPlanning={totalPlanning}
                  missingPlanning={missingPlanning}
                  key={id}
                />
              ))}
            </Fragment>
          )}

          <>
            <Button
              variant="fourth"
              w="full"
              color="text.brand"
              px="2.4rem"
              rightIcon={<ArrowRightIcon />}
              onClick={onOpenNotificationsDrawer}
            >
              <Text as="span" textStyle="action4" color="text.primary" w="full" align="left">
                Ver todas
              </Text>
            </Button>

            {isOpenNotificationsDrawer && (
              <DynamicNotificationsDrawer
                isOpen={isOpenNotificationsDrawer}
                onClose={onCloseNotificationsDrawer}
              />
            )}
          </>
        </VStack>
      </Flex>
    </Flex>
  );
};
