import { Button, Flex, HStack, Input, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ApiServiceErr, useUpdateFarmer, useUpdateManager, useUploadFile } from '@/api';
import { CircleIcon } from '@/components/CircleIcon';
import { EditIcon } from '@/components/icons';
import { WarningModal } from '@/components/WarningModal';

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
  const [avatar, setAvatar] = useState(user?.photo?.url);
  const [fileImage, setFileImage] = useState<File>({} as File);
  const [errorMessage, setErrorMessage] = useState('');
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { mutate: updateFarmer, isLoading: isUpdatingUser } = useUpdateFarmer();
  const { mutate: updateManager, isLoading: isUpdatingManager } = useUpdateManager();
  const { mutateAsync: uploadFileImage, isLoading: isLoadingUploadFile } = useUploadFile();

  const formSchema = isManager ? managerProfileFormSchema : farmerProfileFormSchema;
  const methods = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const { handleSubmit } = methods;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    if (file) {
      setFileImage(file);
      reader.readAsDataURL(file);
    }
  };

  const onSuccessEdit = () => {
    setFileImage({} as File);
    toast({
      description: 'Seus dados foram atualizados com sucesso!',
      status: 'success',
    });
  };

  const onErrorEdit = (error: ApiServiceErr) => {
    setErrorMessage(error.response?.data.error?.message ?? '');
    onOpen();
  };

  const uploadUserImage = async () => {
    if (fileImage.size > 0) {
      const image = await uploadFileImage({ files: [fileImage] });
      return image[0].id;
    }
    return null;
  };

  const onSubmitEditProfileForm = async (data: FormSchemaType) => {
    const imageId = await uploadUserImage();

    if (isManager) {
      updateManager(
        {
          managerId: Number(user?.manager?.id),
          ...(data.username === user?.username ? {} : { username: data.username }),
          ...(data.email === user?.email ? {} : { email: data.email }),
          ...(data.phoneNumber === user?.phoneNumber ? {} : { phoneNumber: data.phoneNumber }),
          ...(imageId ? { imageId } : {}),
        },
        {
          onSuccess: onSuccessEdit,
          onError: onErrorEdit,
        },
      );
      return;
    }
    updateFarmer(
      {
        farmerId: Number(user?.farmer?.id),
        ...(data.username === user?.username ? {} : { username: data.username }),
        ...(data.companyPosition === user?.farmer?.company_position
          ? {}
          : { companyPosition: data.companyPosition }),
        ...(data.email === user?.email ? {} : { email: data.email }),
        ...(data.phoneNumber === user?.phoneNumber ? {} : { phoneNumber: data.phoneNumber }),
        ...(imageId ? { imageId } : {}),
      },
      {
        onSuccess: onSuccessEdit,
        onError: onErrorEdit,
      },
    );
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
                onClick={() => inputImageRef.current?.click()}
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
          <Button
            isLoading={isUpdatingUser || isUpdatingManager || isLoadingUploadFile}
            type="submit"
            minW="18rem"
          >
            Salvar Alterações
          </Button>
        </HStack>
      </ProfileDrawerFooter>
      <WarningModal errorCode={errorMessage} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
