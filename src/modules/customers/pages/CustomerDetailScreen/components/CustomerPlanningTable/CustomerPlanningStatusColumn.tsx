import { Badge, Center, Text } from '@chakra-ui/react';

type PlanningStatusColumnProps = {
  historic: Historic[];
};

enum EnumBadgeVariantStatus {
  'accepted' = 'table_success',
  'rejected' = 'table_error',
  'ready_for_evaluation' = 'table_warning',
  'default' = 'table_primary',
}

enum EnumBadgeValueStatus {
  'accepted' = 'Aprovado',
  'rejected' = 'Recusado',
  'ready_for_evaluation' = 'A aprovar',
  'default' = 'Em construção',
}

export const CustomerPlanningStatusColumn = ({ historic }: PlanningStatusColumnProps) => {
  const historicStatus = historic?.at(-1)?.status ?? 'default';
  const actionsCountRejected = historic?.at(-1)?.actions.length ?? 0;

  return (
    <Center>
      <Badge
        variant={EnumBadgeVariantStatus[historicStatus]}
        w="15rem"
        h="3.4rem"
        py="0.8rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Text as="span">{EnumBadgeValueStatus[historicStatus]}</Text>
        {actionsCountRejected > 0 && historicStatus === 'rejected' && (
          <Center boxSize="1.8rem" borderRadius="full" bg="red.danger_30">
            <Text textStyle="footnote" color="surface.primary" lineHeight="0">
              {actionsCountRejected}
            </Text>
          </Center>
        )}
      </Badge>
    </Center>
  );
};
