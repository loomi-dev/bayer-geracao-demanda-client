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
    success: 'opacity.green.0.30',
    error: 'opacity.red.0.30',
    info: 'opacity.gray.0.30',
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
      {...restProps}
    >
      <HStack spacing="3rem">
        {status === 'success' && <DoneIcon fontSize={32} />}
        <Text textStyle="action3" color="surface.primary">
          {description}
        </Text>
      </HStack>

      <Button variant="unstyled" onClick={onClose}>
        <CloseIcon fontSize={20} />
      </Button>
    </Flex>
  );
};
