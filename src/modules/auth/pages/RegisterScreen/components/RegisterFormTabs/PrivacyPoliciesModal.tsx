import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Checkbox,
  ModalProps,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';

import { useRegisterFormTabs } from '../../stores';

type PrivacyPoliciesModalProps = Omit<ModalProps, 'children'>;

export const PrivacyPoliciesModal = ({ onClose, ...restProps }: PrivacyPoliciesModalProps) => {
  const [agreePrivacyPolicies, setCurrentTabForm, setAgreePrivacyPolicies] = useRegisterFormTabs(
    (state) => [state.agreePrivacyPolicies, state.setCurrentTabForm, state.setAgreePrivacyPolicies],
  );

  const handleChangeCheckboxPrivacyPolicies = (event: ChangeEvent<HTMLInputElement>) => {
    setAgreePrivacyPolicies(event.target.checked);
  };

  const handleNextFormStep = () => {
    setCurrentTabForm(1);
    onClose();
  };

  const handleCloseModal = () => {
    onClose();
    setAgreePrivacyPolicies(false);
  };

  return (
    <Modal variant="secondary" onClose={handleCloseModal} isCentered {...restProps}>
      <ModalOverlay />

      <ModalContent
        maxH="67.5rem"
        maxW="62rem"
        w="full"
        bg="surface.secondary"
        color="text.primary"
      >
        <ModalHeader>
          <Text textStyle="h4">Política de privacidade</Text>

          <ModalCloseButton />
        </ModalHeader>

        <ModalBody overflow="auto">
          Bem-vindo ao Top Multiplicadores Bayerl! Agradecemos por usar nossa plataforma . Ao usar a
          plataforma, você está concordando com estes termos.
          <br /> Leia-os com atenção. <br />
          <br /> <Text as="strong">COMO USAR NOSSOS SERVIÇOS</Text> <br /> É preciso que você siga
          as políticas disponibilizadas a você dentro dos Portal. Não faça uso indevido de nossos
          Serviços. Por exemplo, não interfira com nossos Serviços nem tente acessá-los por um
          método diferente da interface e das instruções que fornecemos. Você pode usar nossos
          serviços somente conforme permitido por lei, inclusive regulamentos de controle de
          exportação e reexportação. Podemos suspender ou deixar de fornecer nossos Serviços se você
          descumprir nossos termos ou políticas ou se estivermos investigando casos de suspeita de
          má conduta. <br /> <br /> O uso de nossos Serviços não lhe confere a propriedade sobre
          direitos de propriedade intelectual sobre os nossos Serviços ou sobre o conteúdo que você
          acessar. <br /> <br /> Estes termos não conferem a você o direito de usar quaisquer
          marcas, conteúdo ou logotipos utilizados em nossos Serviços. Não remova, oculte ou altere
          quaisquer avisos legais exibidos em ou junto a nossos Serviços. <br /> <br /> Nossos
          Serviços exibem alguns conteúdos que não são elaborados ou fornecidos por este portal.
          Esses conteúdos são de exclusiva responsabilidade da entidade e usuários que os
          disponibilizam. <br /> <br /> Podemos revisar conteúdo para determinar se é ilegal ou se
          infringe nossas políticas, e podemos remover ou nos recusar a exibir conteúdos que
          razoavelmente acreditamos violar nossas políticas ou a lei. Mas isso não significa,
          necessariamente, que revisaremos todos os conteúdos, portanto por favor, não presuma que o
          faremos, não recaindo qualquer responsabilidade sobre o portal dos conteúdos
          compartilhados Em relação com seu uso dos Serviços, podemos enviar-lhe anúncios de
          serviços, mensagens administrativas e outras informações. <br /> <br /> Você pode
          desativar estas comunicações a qualquer momento. Alguns dos nossos Serviços estão
          disponíveis em dispositivos móveis. O usuário não deve utilizar tais Serviços de forma que
          o distraia ou o impeça de cumprir leis de trânsito ou de segurança.
        </ModalBody>

        <ModalFooter>
          <Checkbox
            variant="round"
            isChecked={agreePrivacyPolicies}
            onChange={handleChangeCheckboxPrivacyPolicies}
          >
            <Text textStyle="caption2" opacity="0.6">
              Declaro que li e concordo com os termos da Política de privacidade e entendo como
              coletam e utilizam os dados pessoais dos usuários da aplicação
            </Text>
          </Checkbox>

          <Button
            size="lg"
            maxW="32.4rem"
            w="full"
            isDisabled={!agreePrivacyPolicies}
            onClick={handleNextFormStep}
          >
            Continuar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
