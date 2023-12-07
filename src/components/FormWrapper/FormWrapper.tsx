import {
  Collapse,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  FormLabelProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FieldError, Merge } from 'react-hook-form';

type FormWrapperProps = {
  label?: string;
  labelStyles?: FormLabelProps;
  error?: FieldError | Merge<FieldError, unknown>;
  errorStyles?: FormErrorMessageProps;
  children: ReactNode;
} & FormControlProps;

export const FormWrapper = ({
  label,
  labelStyles,
  error,
  errorStyles,
  children,
  ...restProps
}: FormWrapperProps) => (
  <FormControl position="relative" isInvalid={Boolean(error)} {...restProps}>
    {label && (
      <FormLabel fontSize="1.2rem" fontWeight="normal" color="text.primary" {...labelStyles}>
        {label}
      </FormLabel>
    )}

    {children}

    <Collapse in={Boolean(error)}>
      <FormErrorMessage color="code.danger" fontSize="1.4rem" pl="1rem" {...errorStyles}>
        {error?.message}
      </FormErrorMessage>
    </Collapse>
  </FormControl>
);
