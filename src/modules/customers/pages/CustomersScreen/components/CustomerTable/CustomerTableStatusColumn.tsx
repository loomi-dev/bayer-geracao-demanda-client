import { Badge, Center, Text } from '@chakra-ui/react';

type CostumerTableStatusColumnProps = {
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

export const CustomerTableStatusColumn = ({ historic }: CostumerTableStatusColumnProps) => {
  const historicStatus = historic?.at(-1)?.status ?? 'default';

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
      </Badge>
    </Center>
  );
};
