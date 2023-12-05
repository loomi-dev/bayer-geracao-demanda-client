import {
  Center,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

export const PlanningActionFormStepper = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: 2,
  });

  return (
    <Center>
      <Stepper index={activeStep} py="1.6rem" mt="2.4rem" maxW="50rem" w="full">
        <Step>
          <StepIndicator>
            <StepStatus complete={<StepNumber />} />

            <StepTitle>Detalhe da ação</StepTitle>
          </StepIndicator>

          <StepSeparator />
        </Step>

        <Step>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />

            <StepTitle>Confirme a ação criada</StepTitle>
          </StepIndicator>
        </Step>
      </Stepper>
    </Center>
  );
};
