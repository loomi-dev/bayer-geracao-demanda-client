import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { CircleIcon } from '@/components/CircleIcon';
import { EditIcon } from '@/components/icons';

import { ProfileDrawerFooter } from '../ProfileDrawer';
import { ProfileImage } from '../ProfileImage';

import { EditProfileFormSchemaType, editProfileFormSchema } from './EditProfileForm.schemas';
import { ProfileForm } from './ProfileForm';

type EditProfileFormProps = {
  onCancel: () => void;
};
export const EditProfileForm = ({ onCancel }: EditProfileFormProps) => {
  const methods = useForm<EditProfileFormSchemaType>({
    resolver: zodResolver(editProfileFormSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const { handleSubmit, watch } = methods;

  return (
    <Flex as="form" w="100%" h="100%" flexDir="column" justify="space-between">
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
            <ProfileImage border="none" position="relative" w="fit-content">
              <CircleIcon position="absolute" bottom="1rem" right="0.5rem" boxSize="4rem">
                <EditIcon color="white" />
              </CircleIcon>
            </ProfileImage>
          </Flex>
          <ProfileForm />
        </Flex>
      </Flex>
      <ProfileDrawerFooter>
        <HStack>
          <Button variant="sixth" bgColor="surface.secondary" minW="18rem" onClick={onCancel}>
            Voltar
          </Button>
          <Button minW="18rem">Salvar Alterações</Button>
        </HStack>
      </ProfileDrawerFooter>
    </Flex>
  );
};
