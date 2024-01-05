import { Flex, Text } from '@chakra-ui/react';

type ForgotPasswordFormStepsProps = {
  step: number;
  totalSteps;
};

export const ForgotPasswordFormSteps = ({ step, totalSteps }: ForgotPasswordFormStepsProps) => (
  <Flex w="full" justify="space-between">
    <Text textStyle="action1" color="text.brand">
      {step} de {totalSteps}
    </Text>
  </Flex>
);
