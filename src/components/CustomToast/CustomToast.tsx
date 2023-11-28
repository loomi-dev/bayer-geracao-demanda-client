import { Button, Flex, FlexProps, HStack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Close, Done } from '../icons';

type CustomToastProps = {
  description: ReactNode;
  onClose: () => void;
} & FlexProps;

export const CustomToast = ({ description, onClose, ...restProps }: CustomToastProps) => (
  <Flex
    bg="rgba(51, 116, 57, 0.50)"
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
      <Done fontSize={32} />
      <Text textStyle="action3" color="surface.primary">
        {description}
      </Text>
    </HStack>

    <Button variant="unstyled" onClick={onClose}>
      <Close fontSize={20} />
    </Button>
  </Flex>
);
