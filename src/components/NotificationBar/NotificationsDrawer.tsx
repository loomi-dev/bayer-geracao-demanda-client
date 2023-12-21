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

import { CircleIcon } from '../CircleIcon';
import { BellIcon } from '../icons';

import { NotificationCard } from './NotificationCard';

type NotificationsDrawerProps = Omit<DrawerProps, 'children'>;

export const NotificationsDrawer = ({ ...restProps }: NotificationsDrawerProps) => (
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
        {Array.from({ length: 10 }).map((_, i) => (
          <NotificationCard key={i} />
        ))}
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
