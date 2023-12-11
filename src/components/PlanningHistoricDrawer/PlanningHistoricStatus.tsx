import { HStack, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';

import { ArrowRightIcon } from '@/components/icons';

export const PlanningHistoricStatus = () => {
  const steps = [
    { title: 'Criação do planejamento' },
    { title: 'Aprovação do RTV' },
    { title: 'Comprovação das ações' },
  ];

  return (
    <VStack
      align="flex-start"
      w="full"
      spacing="1rem"
      bg="opacity.green.0.05"
      px="3.2rem"
      py="2rem"
    >
      <Text textStyle="footnote" color="text.copytext">
        Etapa atual
      </Text>

      <HStack gap="1.6rem">
        {steps.map((step, index) => {
          const isLastStep = index === steps.length - 1;
          const isActive = index === 0;

          return (
            <Fragment key={index}>
              <Text textStyle="action3" color={isActive ? 'green.100' : 'text.secondary'}>
                {step.title}
              </Text>

              {!isLastStep && <ArrowRightIcon color="#333333" opacity="0.5" />}
            </Fragment>
          );
        })}
      </HStack>
    </VStack>
  );
};
