import { Button, Flex, FlexProps, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { CloseIcon, DoneIcon } from '../icons';

type CustomToastProps = {
  description: ReactNode;
  onClose: () => void;
  status?: 'error' | 'success' | 'warning' | 'info' | 'loading';
} & FlexProps;

export const CustomToast = ({
  description,
  status = 'success',
  onClose,
  ...restProps
}: CustomToastProps) => {
  const toastStatusColors = {
    success: 'opacity.green.0.65',
    error: 'opacity.red.0.65',
    info: 'opacity.gray.0.65',
  };

  return (
    <Flex
      bg={toastStatusColors[status] ?? 'opacity.black.0.10'}
      borderRadius="full"
      border="1px solid"
      borderColor="surface.primary"
      backdropFilter="blur(12px)"
      px="2rem"
      py="1.2rem"
      align="center"
      justify="space-between"
      minW="35rem"
      gap="0.5rem"
      {...restProps}
    >
      <HStack spacing="3rem">
        {status === 'success' && <DoneIcon fontSize={32} />}
        <Text textStyle="action3" color="surface.primary">
          {description}
        </Text>
      </HStack>

      <Button variant="unstyled" onClick={onClose} color="greyscale.0">
        <CloseIcon fontSize={20} />
      </Button>
    </Flex>
  );
};
