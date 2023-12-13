import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  HStack,
  Text,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useForm, FormProvider } from 'react-hook-form';

import { CircleIcon, BigCalendarIcon } from '@/components';
import {
  PatchPlanningActionData,
  useCreatePlanningAction,
  useUpdatePlanningAction,
} from '@/modules/planning/api';
import { PlanningActionValues } from '@/types';
import { brlToCents } from '@/utils';

import { useUpdatePlanningActionStore } from '../../stores';
import { PlanningActionDetail } from '../PlanningActionDetail';

import {
  PlanningActionFormSchemaType,
  planningActionFormSchema,
} from './PlanningActionForm.schema';
import { PlanningActionFormAccordion } from './PlanningActionFormAccordion';
import { PlanningActionFormStepper } from './PlanningActionFormStepper';
import { RecommendationsAccordion } from './RecommendationsAccordion';
import { TrousseauSelectAccordion } from './TrousseauSelectAccordion';

type UpdatePlanningActionInitialValues = {
  title: string;
  type: PlanningActionType;
  value: string;
  date: Array<Date | string>;
  description?: string | undefined;
};

type UpdatePlanningActionDrawerProps =
  | ({
      mode: 'EDIT';
      initialValues: UpdatePlanningActionInitialValues;
    } & Omit<DrawerProps, 'children'>)
  | ({
      mode: 'CREATE';
    } & Omit<DrawerProps, 'children'>);

export const UpdatePlanningActionDrawer = (props: UpdatePlanningActionDrawerProps) => {
  const { query } = useRouter();
  const session = useSession();

  const planningId = Number(query?.planning_id);
  const farmerId = session.data?.user.id as number;

  const [currentStep, setCurrentStep] = useUpdatePlanningActionStore((state) => [
    state.currentStep,
    state.setCurrentStep,
  ]);

  const { mutate: createPlanningAction, isLoading: isLoadingCreatePlanningAction } =
    useCreatePlanningAction();
  const { mutate: updatePlanningAction, isLoading: isLoadingUpdatePlanningAction } =
    useUpdatePlanningAction();

  const methods = useForm<PlanningActionFormSchemaType>({
    resolver: zodResolver(planningActionFormSchema),
    mode: 'all',
    criteriaMode: 'all',
    ...(props.mode === 'EDIT' && {
      defaultValues: props.initialValues,
    }),
  });

  const {
    watch,
    reset,
    getValues,
    formState: { isValid },
  } = methods;

  const planningActionTypeValue = watch('type');

  const planningActionTitle = watch('title') ?? '-';
  const planningActionType = PlanningActionValues[planningActionTypeValue];
  const planningActionInvestment = watch('value') ?? '-';
  const planningActionDescription = watch('description') ?? '-';

  const handleBackStep = () => {
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    setCurrentStep(1);
  };

  const handleCloseUpdatePlanningActionDrawer = () => {
    setCurrentStep(0);
    reset();
    props.onClose();
  };

  const onSubmitUpdatePlanningActionForm = () => {
    if (isValid) {
      const { title, type, description, value, date } = getValues();
      const planningActionData: PatchPlanningActionData = {
        farmerId,
        planningId,
        title,
        type,
        detail: description,
        amountInCents: brlToCents(value),
        status: 'not_evaluated',
        initialDate: dayjs(date[0]).format('YYYY-MM-DD'),
        finishDate: dayjs(date[1]).format('YYYY-MM-DD'),
      };

      if (props.mode === 'EDIT') {
        updatePlanningAction(planningActionData, {
          onSuccess: () => {
            handleCloseUpdatePlanningActionDrawer();
          },
        });
      } else {
        createPlanningAction(planningActionData, {
          onSuccess: () => {
            handleCloseUpdatePlanningActionDrawer();
          },
        });
      }
    }
  };

  return (
    <Drawer {...props} onClose={handleCloseUpdatePlanningActionDrawer} placement="right">
      <DrawerOverlay onClick={handleCloseUpdatePlanningActionDrawer} />
      <DrawerContent>
        <FormProvider {...methods}>
          <DrawerHeader>
            <HStack spacing="1.6rem">
              <CircleIcon>
                <BigCalendarIcon />
              </CircleIcon>

              <Text textStyle="caption1">
                {props.mode === 'EDIT' ? 'Editar ação' : 'Criar nova ação'}
              </Text>
            </HStack>

            <PlanningActionFormStepper mode={props.mode} />
          </DrawerHeader>

          <DrawerBody justifyContent={currentStep === 1 ? 'space-between' : 'initial'}>
            {currentStep === 0 && (
              <>
                <RecommendationsAccordion key="recommendations-accordion" />
                <PlanningActionFormAccordion key="planning-action-form-accordion" />
                {planningActionTypeValue === 'farm_kit' && (
                  <TrousseauSelectAccordion key="trousseau-select-accordion" />
                )}
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
              onClick={currentStep === 0 ? handleCloseUpdatePlanningActionDrawer : handleBackStep}
            >
              {currentStep === 0 ? 'Cancelar' : 'Voltar'}
            </Button>
            <Button
              w="18rem"
              isDisabled={!isValid}
              isLoading={isLoadingCreatePlanningAction || isLoadingUpdatePlanningAction}
              onClick={currentStep === 1 ? onSubmitUpdatePlanningActionForm : handleNextStep}
            >
              {currentStep === 0
                ? props.mode === 'EDIT'
                  ? 'Editar ação'
                  : 'Criar nova ação'
                : 'Confirmar ação'}
            </Button>
          </DrawerFooter>
        </FormProvider>
      </DrawerContent>
    </Drawer>
  );
};
