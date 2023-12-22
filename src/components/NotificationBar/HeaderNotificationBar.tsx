import { HStack, Text } from '@chakra-ui/react';

import { CircleIcon } from '../CircleIcon';
import { BellIcon } from '../icons';

export const HeaderNotificationBar = () => (
  <HStack gap="1rem">
    <CircleIcon boxSize={{ lg: '4.5rem', xl: '5.1rem' }}>
      <BellIcon />
    </CircleIcon>

    <Text textStyle={{ lg: 'h4', xl: 'h3' }} fontWeight={{ lg: 'normal' }}>
      Notificações
    </Text>
  </HStack>
);
