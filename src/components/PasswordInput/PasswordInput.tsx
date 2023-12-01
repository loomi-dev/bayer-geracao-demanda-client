import {
  InputProps,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { ReactNode, forwardRef, useState } from 'react';

import { Eye, EyeOff } from '../icons';

type PasswordInputProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & InputProps;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ leftIcon, rightIcon, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
      setShowPassword((lastState) => !lastState);
    };

    return (
      <InputGroup>
        {leftIcon && <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>}

        <Input type={showPassword ? 'text' : 'password'} ref={ref} {...props} />

        {rightIcon ? (
          <InputRightElement pointerEvents="none">{rightIcon}</InputRightElement>
        ) : (
          <InputRightElement>
            <Button
              variant="unstyled"
              display="flex"
              justifyContent="center"
              pr="1.2rem"
              onClick={handleToggleShowPassword}
            >
              {showPassword ? <EyeOff fontSize={22} /> : <Eye fontSize={22} />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
