import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { FormProvider, useForm } from 'react-hook-form';

import { Balance, BigCalendarIcon, CircleIcon } from '@/components';
import { useCreatePlanningAction } from '@/modules/planning/api';
import { PlanningActionValues } from '@/types';
import { brlToCents } from '@/utils';

import { useCreatePlanningActionStore } from '../../stores';
import { PlanningActionDetail } from '../PlanningActionDetail';

import {
  PlanningActionFormSchemaType,
  planningActionFormSchema,
} from './PlanningActionForm.schema';
import { PlanningActionFormAccordion } from './PlanningActionFormAccordion';
import { PlanningActionFormStepper } from './PlanningActionFormStepper';
import { RecommendationsAccordion } from './RecommendationsAccordion';

export const CreatePlanningActionDrawerButton = () => {
  const { query } = useRouter();
  const session = useSession();

  const planningId = Number(query?.planning_id);
  const farmerId = session.data?.user.id as number;

  const [currentStep, setCurrentStep] = useCreatePlanningActionStore((state) => [
    state.currentStep,
    state.setCurrentStep,
  ]);

  const {
    isOpen: isOpenCreatePlanningActionDrawer,
    onOpen: onOpenCreatePlanningActionDrawer,
    onClose: onCloseCreatePlanningActionDrawer,
  } = useDisclosure();

  const { mutate: createPlanningAction, isLoading: isLoadingCreatePlanningAction } =
    useCreatePlanningAction();

  const methods = useForm<PlanningActionFormSchemaType>({
    resolver: zodResolver(planningActionFormSchema),
    mode: 'all',
    criteriaMode: 'all',
  });

  const {
    watch,
    reset,
    formState: { isValid },
  } = methods;

  const planningActionTitle = watch('title') ?? '-';
  const planningActionType = PlanningActionValues[watch('type')];
  const planningActionInvestment = watch('value') ?? '-';
  const planningActionDescription = watch('description') ?? '-';

  const handleBackStep = () => {
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    setCurrentStep(1);
  };

  const handleCloseCreatePlanningActionDrawer = () => {
    setCurrentStep(0);
    reset();
    onCloseCreatePlanningActionDrawer();
  };

  const onSubmitCreatePlanningActionForm = () => {
    if (isValid) {
      const { title, type, description, value } = watch();

      createPlanningAction(
        {
          farmerId,
          planningId,
          title,
          type,
          detail: description,
          amountInCents: brlToCents(value),
          status: 'not_evaluated',
        },
        {
          onSuccess: () => {
            handleCloseCreatePlanningActionDrawer();
          },
        },
      );
    }
  };

  return (
    <>
      <Balance.Button w="15.6rem" onClick={onOpenCreatePlanningActionDrawer}>
        Nova ação
      </Balance.Button>

      <Drawer
        isOpen={isOpenCreatePlanningActionDrawer}
        onClose={handleCloseCreatePlanningActionDrawer}
        placement="right"
      >
        <DrawerOverlay onClick={onCloseCreatePlanningActionDrawer} />
        <DrawerContent>
          <FormProvider {...methods}>
            <DrawerHeader>
              <HStack spacing="1.6rem">
                <CircleIcon>
                  <BigCalendarIcon />
                </CircleIcon>

                <Text textStyle="caption1">Criar nova ação</Text>
              </HStack>

              <PlanningActionFormStepper />
            </DrawerHeader>

            <DrawerBody justifyContent={currentStep === 1 ? 'space-between' : 'initial'}>
              {currentStep === 0 && (
                <>
                  <RecommendationsAccordion />
                  <PlanningActionFormAccordion />
                </>
              )}

              {currentStep === 1 && (
                <PlanningActionDetail
                  title={planningActionTitle}
                  type={planningActionType}
                  investment={planningActionInvestment}
                  description={planningActionDescription}
                />
              )}

              <HStack mt="1rem" justify="flex-end">
                <Text
                  textStyle="caption3"
                  color="text.footnote"
                  maxW="45rem"
                  align="right"
                  lineHeight="2rem"
                >
                  Obs: Sua solicitação será analisada e em até 5 dias úteis você poderá utilizar os
                  recursos
                </Text>
              </HStack>
            </DrawerBody>

            <DrawerFooter>
              <Button
                variant="secondary"
                w="18rem"
                onClick={currentStep === 0 ? handleCloseCreatePlanningActionDrawer : handleBackStep}
              >
                {currentStep === 0 ? 'Cancelar' : 'Voltar'}
              </Button>
              <Button
                w="18rem"
                isDisabled={!isValid}
                isLoading={isLoadingCreatePlanningAction}
                onClick={currentStep === 1 ? onSubmitCreatePlanningActionForm : handleNextStep}
              >
                {currentStep === 0 ? 'Criar nova ação' : 'Confirmar ação'}
              </Button>
            </DrawerFooter>
          </FormProvider>
        </DrawerContent>
      </Drawer>
    </>
  );
};
