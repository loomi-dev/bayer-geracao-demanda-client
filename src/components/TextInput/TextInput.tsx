import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { ChangeEvent, ReactNode, forwardRef } from 'react';

import { MaskType } from '@/utils';

export type TextInputProps = {
  maskEnabled?: boolean;
  mask?: (value: string, maskType?: MaskType) => string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & InputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ mask, maskEnabled = true, leftIcon, rightIcon, ...props }, ref) => {
    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
      if (maskEnabled && mask) {
        return (event.currentTarget.value = mask(event.currentTarget.value));
      }
    };

    return (
      <InputGroup>
        {leftIcon && <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>}

        <Input type="text" onChangeCapture={handleChangeInputValue} {...props} ref={ref} />

        {rightIcon && <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>}
      </InputGroup>
    );
  },
);

TextInput.displayName = 'TextInput';
