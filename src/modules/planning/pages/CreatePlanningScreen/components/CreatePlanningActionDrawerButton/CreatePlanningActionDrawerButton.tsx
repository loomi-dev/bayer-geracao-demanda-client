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
import { FormProvider, useForm } from 'react-hook-form';

import { Balance, BigCalendarIcon, CircleIcon } from '@/components';

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
  const [currentStep, setCurrentStep] = useCreatePlanningActionStore((state) => [
    state.currentStep,
    state.setCurrentStep,
  ]);

  const {
    isOpen: isOpenCreatePlanningActionDrawer,
    onOpen: onOpenCreatePlanningActionDrawer,
    onClose: onCloseCreatePlanningActionDrawer,
  } = useDisclosure();

  const methods = useForm<PlanningActionFormSchemaType>({
    resolver: zodResolver(planningActionFormSchema),
  });

  const {
    watch,
    reset,
    formState: { isValid },
  } = methods;

  const planningActionTitle = watch('title') ?? '-';
  const planningActionType = watch('type') ?? '-';
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

  return (
    <>
      <Balance.Button w="15.6rem" onClick={onOpenCreatePlanningActionDrawer}>
        Nova ação
      </Balance.Button>

      <Drawer
        isOpen={isOpenCreatePlanningActionDrawer}
        onClose={handleCloseCreatePlanningActionDrawer}
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
              <Button w="18rem" isDisabled={!isValid} onClick={handleNextStep}>
                Criar nova ação
              </Button>
            </DrawerFooter>
          </FormProvider>
        </DrawerContent>
      </Drawer>
    </>
  );
};