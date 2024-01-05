import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { EmailIcon, FormWrapper, TextInput } from '@/components';

import { SendEmailFormSchemaType, sendEmailFormSchema } from './SendEmailForm.schema';

export const SendEmailForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SendEmailFormSchemaType>({
    resolver: zodResolver(sendEmailFormSchema),
  });

  const onSubmitSendEmailForm = async (data: SendEmailFormSchemaType) => {
    console.log(data);
  };

  return (
    <Box
      as="form"
      w="full"
      maxW="48.5rem"
      mt="1.6rem"
      onSubmit={handleSubmit(onSubmitSendEmailForm)}
    >
      <VStack align="flex-start" spacing="1.6rem">
        <Text textStyle="h1" lineHeight="4rem">
          Esqueceu sua senha?
        </Text>
        <Text textStyle="body1" opacity="0.6" maxW="33rem" lineHeight="2.4rem">
          Sem problemas, insira seu e-mail para que redefinimos
        </Text>
      </VStack>

      <FormWrapper my="4rem" error={errors.email}>
        <TextInput
          placeholder="E-mail"
          size="xl"
          leftIcon={<EmailIcon />}
          _placeholder={{
            fontSize: '1.8rem',
            color: 'greyscale.600',
          }}
          {...register('email')}
        />
      </FormWrapper>

      <VStack spacing="2.4rem">
        <Button type="submit" w="full" fontSize="1.8rem">
          Enviar e-mail
        </Button>

        <Link href="/entrar" passHref legacyBehavior>
          <Button as="a" variant="eighth" w="full">
            Voltar
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};
