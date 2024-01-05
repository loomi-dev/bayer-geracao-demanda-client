import { Box } from '@chakra-ui/react';

import { CircleIcon } from '../CircleIcon';
import { AddIcon, GrouperIcon } from '../icons';

type NotificationGrouperProps = {
  actionsAmount: number;
};

export const NotificationGrouper = ({ actionsAmount }: NotificationGrouperProps) => (
  <Box position="relative" h="full" w="1rem">
    {actionsAmount >= 2 && (
      <Box position="absolute" left="0" top="0.8rem">
        <GrouperIcon />
      </Box>
    )}

    {actionsAmount >= 2 && (
      <CircleIcon
        boxSize="1.8rem"
        position="absolute"
        left="-0.8rem"
        top={actionsAmount >= 3 ? '3.4rem' : '1.8rem'}
        border="1px solid"
        borderColor="greyscale.250"
      >
        <AddIcon />
      </CircleIcon>
    )}

    {actionsAmount >= 3 && (
      <Box position="absolute" left="0" top="4.2rem">
        <GrouperIcon />
      </Box>
    )}
  </Box>
);
