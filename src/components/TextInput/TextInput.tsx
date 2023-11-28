import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type TextInputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & InputProps;

export const TextInput = ({ leftIcon, rightIcon, ...props }: TextInputProps) => (
  <InputGroup>
    {leftIcon && <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>}

    <Input type="text" {...props} />

    {rightIcon && <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>}
  </InputGroup>
);
