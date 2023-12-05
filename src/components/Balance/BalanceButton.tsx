import { Button, ButtonProps, Spinner, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { CircleIcon } from '../CircleIcon';
import { AddInsideCircleIcon } from '../icons';

type BalanceButtonProps = {
  children: ReactNode;
} & ButtonProps;

export const BalanceButton = ({ children, isLoading, ...restProps }: BalanceButtonProps) => (
  <Button
    variant="third"
    w="21.5rem"
    pl="2.4rem"
    pr="0"
    transition="all 0.2s linear"
    rightIcon={
      <CircleIcon>
        {isLoading ? <Spinner color="#fff" fontSize={20} /> : <AddInsideCircleIcon />}
      </CircleIcon>
    }
    _hover={{
      pl: '1rem',
    }}
    _disabled={{
      pl: '1rem',
    }}
    isLoading={false}
    isDisabled={isLoading}
    {...restProps}
  >
    <Text as="span" w="full" align="center">
      {children}
    </Text>
  </Button>
);
