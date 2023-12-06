import { Flex, HStack, Text } from '@chakra-ui/react';

import { ArrowRightIcon } from '@/components/icons';

export const ActionStepper = () => {
  const steps = [
    { title: 'Criação do planejamento' },
    { title: 'Aprovação do RTV' },
    { title: 'Comprovação das ações' },
  ];
  const lastStep = steps.length - 1;
  return (
    <Flex bgColor="opacity.green.0.05" px="3.2rem" py="2rem" flexDir="column" h="7.9rem">
      <Text textStyle="footnote" color="text.copytext">
        Etapa atual
      </Text>
      <HStack gap="1.6rem">
        {steps.map((step, index) => (
          <>
            <Text textStyle="action3">{step.title}</Text>
            {index < lastStep && <ArrowRightIcon color="#333333" opacity={0.5} />}
          </>
        ))}
      </HStack>
    </Flex>
  );
};
