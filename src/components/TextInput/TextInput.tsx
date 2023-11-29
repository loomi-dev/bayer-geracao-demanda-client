import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { ReactNode, forwardRef } from 'react';

type TextInputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & InputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ leftIcon, rightIcon, ...props }, ref) => (
    <InputGroup>
      {leftIcon && <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>}

      <Input type="text" ref={ref} {...props} />

      {rightIcon && <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>}
    </InputGroup>
  ),
);

TextInput.displayName = 'TextInput';
