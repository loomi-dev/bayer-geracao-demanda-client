import { Button, Flex, HStack, Input, Text, useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useUpdateFarmer, useUpdateManager } from '@/api';
import { CircleIcon } from '@/components/CircleIcon';
import { EditIcon } from '@/components/icons';

import { ProfileDrawerFooter } from '../ProfileDrawer';
import { ProfileImage } from '../ProfileImage';

import {
  FarmerProfileFormSchemaType,
  ManagerProfileFormSchemaType,
  farmerProfileFormSchema,
  managerProfileFormSchema,
} from './EditProfileForm.schemas';
import { ProfileForm } from './ProfileForm';

type EditProfileFormProps = {
  onCancel: () => void;
};

export type FormSchemaType = ManagerProfileFormSchemaType & FarmerProfileFormSchemaType;

export const EditProfileForm = ({ onCancel }: EditProfileFormProps) => {
  const session = useSession();
  const toast = useToast();
  const inputImageRef = useRef<HTMLInputElement>(null);
  const user = session.data?.user;
  const isManager = user?.role === 'Manager';
  const { mutate: updateFarmer, isLoading: isUpdatingUser } = useUpdateFarmer();
  const { mutate: updateManager, isLoading: isUpdatingManager } = useUpdateManager();
  const formSchema = isManager ? managerProfileFormSchema : farmerProfileFormSchema;
  const [avatar, setAvatar] = useState('');

  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const { handleSubmit } = methods;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const onSubmitEditProfileForm = (data: FormSchemaType) => {
    if (isManager) {
      updateManager(
        {
          managerId: Number(user?.manager?.id),
          username: data.username,
          email: data.email,
          phoneNumber: data.phoneNumber,
          photo: avatar,
        },
        {
          onSuccess: () =>
            toast({
              description: 'Seus dados foram atualizados com sucesso!',
              status: 'success',
            }),
          onError: () => {
            toast({
              description: 'Ocorreu um erro ao atualizar seus dados.',
              status: 'error',
            });
          },
        },
      );
      return;
    }
    updateFarmer({
      farmerId: Number(user?.farmer?.id),
      username: data.username,
      email: data.email,
      companyPosition: data.companyPosition,
      phoneNumber: data.phoneNumber,
      photo: avatar,
    });
  };

  return (
    <Flex
      as="form"
      w="100%"
      h="100%"
      onSubmit={handleSubmit(onSubmitEditProfileForm)}
      flexDir="column"
      justify="space-between"
    >
      <Flex
        py="2rem"
        px="2.4rem"
        borderRadius="3rem"
        flexDir="column"
        align="flex-start"
        layerStyle="card"
        my="1.6rem"
        mx="2.4rem"
      >
        <Text textStyle="footnote-bold" textTransform="uppercase">
          informações pessoais
        </Text>
        <Flex flexDir="column" w="100%">
          <Flex justify="center">
            <ProfileImage src={avatar} border="none" position="relative" w="fit-content">
              <Input
                hidden
                ref={inputImageRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <CircleIcon
                onClick={() => {
                  console.log(inputImageRef.current?.click());
                }}
                position="absolute"
                bottom="1rem"
                right="0.5rem"
                boxSize="4rem"
                _hover={{ opacity: '0.7', cursor: 'pointer' }}
              >
                <EditIcon color="white" />
              </CircleIcon>
            </ProfileImage>
          </Flex>
          <FormProvider {...methods}>
            <ProfileForm />
          </FormProvider>
        </Flex>
      </Flex>
      <ProfileDrawerFooter>
        <HStack>
          <Button variant="sixth" bgColor="surface.secondary" minW="18rem" onClick={onCancel}>
            Voltar
          </Button>
          <Button isLoading={isUpdatingUser || isUpdatingManager} type="submit" minW="18rem">
            Salvar Alterações
          </Button>
        </HStack>
      </ProfileDrawerFooter>
    </Flex>
  );
};
