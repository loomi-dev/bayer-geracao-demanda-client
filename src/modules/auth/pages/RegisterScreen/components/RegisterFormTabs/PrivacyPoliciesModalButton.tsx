import {
  Button,
  useDisclosure,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Checkbox,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { CircleIcon, ArrowRightMediumIcon } from '@/components';

export const PrivacyPoliciesModalButton = () => {
  const {
    isOpen: isOpenPrivacyPoliciesModal,
    onOpen: onOpenPrivacyPoliciesModal,
    onClose: onClosePrivacyPoliciesModal,
  } = useDisclosure();

  const { register, watch } = useFormContext();

  const nameValue = watch('name');
  const emailValue = watch('email');
  const roleValue = watch('role');
  const agreePrivacyPolicies = watch('agreePrivacyPolicies');

  const isValidAccountDataForm = false;

  return (
    <>
      <Button
        size="lg"
        variant="white"
        w="17.7rem"
        p="1rem"
        mt="8.8rem"
        mx="auto"
        rightIcon={
          <CircleIcon boxSize="3.9rem" bg="green.600">
            <ArrowRightMediumIcon />
          </CircleIcon>
        }
        isDisabled={!isValidAccountDataForm}
        onClick={onOpenPrivacyPoliciesModal}
      >
        <Text as="span" textStyle="action3" color="text.footnote" w="full" align="center">
          Próximo
        </Text>
      </Button>

      <Modal isOpen={isOpenPrivacyPoliciesModal} onClose={onClosePrivacyPoliciesModal} isCentered>
        <ModalOverlay />

        <ModalContent
          maxH="67.5rem"
          maxW="62rem"
          w="full"
          bg="surface.secondary"
          color="text.primary"
        >
          <ModalHeader>
            <Text>Política de privacidade</Text>

            <ModalCloseButton />
          </ModalHeader>

          <ModalBody overflow="auto">
            Bem-vindo ao Top Multiplicadores Bayerl! Agradecemos por usar nossa plataforma . Ao usar
            a plataforma, você está concordando com estes termos. Leia-os com atenção. COMO USAR
            NOSSOS SERVIÇOS É preciso que você siga as políticas disponibilizadas a você dentro dos
            Portal. Não faça uso indevido de nossos Serviços. Por exemplo, não interfira com nossos
            Serviços nem tente acessá-los por um método diferente da interface e das instruções que
            fornecemos. Você pode usar nossos serviços somente conforme permitido por lei, inclusive
            regulamentos de controle de exportação e reexportação. Podemos suspender ou deixar de
            fornecer nossos Serviços se você descumprir nossos termos ou políticas ou se estivermos
            investigando casos de suspeita de má conduta. O uso de nossos Serviços não lhe confere a
            propriedade sobre direitos de propriedade intelectual sobre os nossos Serviços ou sobre
            o conteúdo que você acessar. Estes termos não conferem a você o direito de usar
            quaisquer marcas, conteúdo ou logotipos utilizados em nossos Serviços. Não remova,
            oculte ou altere quaisquer avisos legais exibidos em ou junto a nossos Serviços. Nossos
            Serviços exibem alguns conteúdos que não são elaborados ou fornecidos por este portal.
            Esses conteúdos são de exclusiva responsabilidade da entidade e usuários que os
            disponibilizam. Podemos revisar conteúdo para determinar se é ilegal ou se infringe
            nossas políticas, e podemos remover ou nos recusar a exibir conteúdos que razoavelmente
            acreditamos violar nossas políticas ou a lei. Mas isso não significa, necessariamente,
            que revisaremos todos os conteúdos, portanto por favor, não presuma que o faremos, não
            recaindo qualquer responsabilidade sobre o portal dos conteúdos compartilhados Em
            relação com seu uso dos Serviços, podemos enviar-lhe anúncios de serviços, mensagens
            administrativas e outras informações. Você pode desativar estas comunicações a qualquer
            momento. Alguns dos nossos Serviços estão disponíveis em dispositivos móveis. O usuário
            não deve utilizar tais Serviços de forma que o distraia ou o impeça de cumprir leis de
            trânsito ou de segurança.
          </ModalBody>

          <ModalFooter>
            <Checkbox {...register('agreePrivacyPolicies')}>
              Declaro que li e concordo com os termos da Política de privacidade e entendo como
              coletam e utilizam os dados pessoais dos usuários da aplicação
            </Checkbox>

            <Button size="lg" maxW="32.4rem" w="full">
              Continuar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
