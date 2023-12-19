import { Badge, Button, Center, Flex, HStack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useGetFarmerPendingPlannings } from '@/api';

import { getPendingPlanningsSummary } from './utils';

export const CustomerPendingPlanningNotification = () => {
  const { query, push } = useRouter();
  const customerId = Number(query.customer_id);
  const { data } = useGetFarmerPendingPlannings(
    { farmerId: customerId },
    { enabled: Boolean(customerId) },
  );
  const plannings = data?.data.plannings ?? [];
  const pendingPlannings = getPendingPlanningsSummary(plannings);
  if (!pendingPlannings.quantity) return;

  const onClickPendingNotification = () =>
    push(`${customerId}/detalhes/${pendingPlannings.mostRecentPendingPlanningId}`);
  return (
    <Flex
      align="center"
      layerStyle="card"
      justify="space-between"
      width="100%"
      py="2rem"
      px="1.6rem"
      h="5.3rem"
    >
      <Text
        textStyle="footnote-bold"
        textTransform="uppercase"
        fontSize={{ base: '1.2rem', xl: '1.3rem' }}
      >
        Você possui planejamentos para aprovar
      </Text>
      <HStack gap="1.6rem">
        <Badge
          variant="table_warning"
          w="16.7rem"
          h="3.4rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <Text as="span">Aguardando aprovação</Text>
          <Center
            minW="1.8rem"
            boxSize="1.8rem"
            borderRadius="full"
            bg="yellow.warning_60"
            border="1px solid"
            borderColor="opacity.yellow.0.30"
          >
            <Text textStyle="footnote" color="surface.primary" lineHeight="0">
              {pendingPlannings.quantity}
            </Text>
          </Center>
        </Badge>
        <Button onClick={onClickPendingNotification} size="xs" px="1.6rem">
          <Text textStyle="action3">Visualizar planejamento</Text>
        </Button>
      </HStack>
    </Flex>
  );
};
