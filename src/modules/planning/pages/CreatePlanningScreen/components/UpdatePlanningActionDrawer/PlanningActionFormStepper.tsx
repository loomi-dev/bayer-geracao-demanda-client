import {
  Center,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';

import { useUpdatePlanningActionStore } from '../../stores';

type PlanningActionFormStepperProps = {
  mode: 'CREATE' | 'EDIT';
};

export const PlanningActionFormStepper = ({ mode }: PlanningActionFormStepperProps) => {
  const currentStep = useUpdatePlanningActionStore((state) => state.currentStep);

  return (
    <Center>
      <Stepper index={currentStep + 1} py="1.6rem" mt="2.4rem" maxW="50rem" w="full">
        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepNumber />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />

            <StepTitle>Detalhe da ação</StepTitle>
          </StepIndicator>

          <StepSeparator />
        </Step>

        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepNumber />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />

            <StepTitle>
              {mode === 'EDIT' ? 'Confirme a ação editada' : 'Confirme a ação criada'}
            </StepTitle>
          </StepIndicator>
        </Step>
      </Stepper>
    </Center>
  );
};
