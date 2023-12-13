import { HStack, Text, VStack } from '@chakra-ui/react';
import { Fragment } from 'react';

import { ArrowRightMediumIcon } from '@/components/icons';

type HistoricDrawerStatusProps = {
  status?: HistoricStatus;
};

export const HistoricDrawerStatus = ({ status }: HistoricDrawerStatusProps) => {
  const steps = [
    { title: 'Criação do planejamento', isActive: true, colorActive: 'green.100' },
    {
      title: 'Aprovação do RTV',
      isActive: status === 'accepted' || status === 'rejected',
      colorActive: status === 'rejected' ? 'red.danger_40' : 'green.100',
    },
    { title: 'Comprovação das ações', isActive: status === 'accepted', colorActive: 'green.100' },
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
        {steps.map(({ title, isActive, colorActive }, index) => {
          const isLastStep = index === steps.length - 1;

          return (
            <Fragment key={index}>
              <Text textStyle="action3" color={isActive ? colorActive : 'text.secondary'}>
                {title}
              </Text>

              {!isLastStep && <ArrowRightMediumIcon color="#333333" opacity="0.5" />}
            </Fragment>
          );
        })}
      </HStack>
    </VStack>
  );
};
