import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { Fragment } from 'react';

import { useGetNotificationsByUser } from '@/api';
import { usePagination } from '@/hooks';

import { CircleIcon } from '../CircleIcon';
import { BellIcon } from '../icons';

import { NotificationCard } from './NotificationCard';
import { NotificationCardSkeleton } from './NotificationCardSkeleton';

type NotificationsDrawerProps = Omit<DrawerProps, 'children'>;

export const NotificationsDrawer = ({ ...restProps }: NotificationsDrawerProps) => {
  const session = useSession();
  const userId = session.data?.user?.id as number;

  const { currentPage } = usePagination('notifications');

  const {
    data: dataGetNotificationsByUser,
    isLoading: isLoadingGetNotificationsByUser,
    isFetching: isFetchingGetNotificationsByUser,
  } = useGetNotificationsByUser({
    userId,
    pagination: {
      page: currentPage,
      pageSize: 10,
    },
  });

  const notifications = dataGetNotificationsByUser?.data ?? [];
  const isLoadingNotifications =
    isLoadingGetNotificationsByUser || isFetchingGetNotificationsByUser;

  return (
    <Drawer placement="right" {...restProps}>
      <DrawerOverlay />

      <DrawerContent>
        <DrawerHeader display="flex" alignItems="center" justifyContent="space-between">
          <HStack spacing="1.6rem">
            <CircleIcon>
              <BellIcon />
            </CircleIcon>

            <Text textStyle="caption1">Todas as notificações</Text>
          </HStack>

          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody gap="1rem">
          {isLoadingNotifications ? (
            <Fragment>
              {Array.from({ length: 10 }).map((_, i) => (
                <NotificationCardSkeleton key={i} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {notifications.map(({ id, missingPlanning, totalPlanning, safra: { year } }) => (
                <NotificationCard
                  harvestYear={year ?? ''}
                  missingPlanning={missingPlanning}
                  totalPlanning={totalPlanning}
                  key={id}
                />
              ))}
            </Fragment>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
