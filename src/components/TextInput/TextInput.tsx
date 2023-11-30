import {
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { ReactNode, forwardRef } from 'react';

export type TextInputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  inputGroupProps?: InputGroupProps;
} & InputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ leftIcon, rightIcon, inputGroupProps, ...props }, ref) => (
    <InputGroup {...inputGroupProps}>
      {leftIcon && <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>}

      <Input type="text" ref={ref} {...props} />

      {rightIcon && <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>}
    </InputGroup>
  ),
);

TextInput.displayName = 'TextInput';
