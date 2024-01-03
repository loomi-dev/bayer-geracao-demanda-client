import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  HStack,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { Fragment, useRef, useState } from 'react';

import { useGetNotificationsByUser } from '@/api';
import { useInfiniteScroll } from '@/hooks';

import { CircleIcon } from '../CircleIcon';
import { BellIcon } from '../icons';

import { NotificationCard } from './NotificationCard';
import { NotificationCardSkeleton } from './NotificationCardSkeleton';

type NotificationsDrawerProps = Omit<DrawerProps, 'children'>;

export const NotificationsDrawer = ({ ...restProps }: NotificationsDrawerProps) => {
  const [notifications, setNotifications] = useState<UserNotification[]>([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const loaderRef = useRef<HTMLDivElement>(null);
  const session = useSession();
  const userId = session.data?.user?.id as number;

  const {
    isLoading: isLoadingGetNotificationsByUser,
    isFetching: isFetchingGetNotificationsByUser,
  } = useGetNotificationsByUser(
    {
      userId,
      pagination: {
        page: currentPage,
        pageSize: 10,
      },
    },
    {
      onSuccess: ({ data, meta }) => {
        const newNotifications = data;

        setNotifications((oldNotifications) => [...oldNotifications, ...newNotifications]);
        setHasNextPage(currentPage < meta.pagination.pageCount);
      },
    },
  );

  const isLoadingNotifications =
    isLoadingGetNotificationsByUser || isFetchingGetNotificationsByUser;

  const loadMoreNotifications = () => {
    setCurrentPage((oldPage) => oldPage + 1);
  };

  useInfiniteScroll({
    targetRef: loaderRef,
    hasNextPage,
    isLoading: isLoadingNotifications,
    loadMoreItems: loadMoreNotifications,
  });

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
          {isLoadingGetNotificationsByUser ? (
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

              {(hasNextPage || isLoadingNotifications) && (
                <Center mt="1rem">
                  <Spinner boxSize="2.4rem" color="text.brand" ref={loaderRef} />
                </Center>
              )}
            </Fragment>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
