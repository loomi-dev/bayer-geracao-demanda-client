import { Input, InputProps } from '@chakra-ui/react';

type TextInputProps = InputProps;

export const TextInput = ({ ...props }: TextInputProps) => (
  <Input {...props} type="text" variant="text" />
);
