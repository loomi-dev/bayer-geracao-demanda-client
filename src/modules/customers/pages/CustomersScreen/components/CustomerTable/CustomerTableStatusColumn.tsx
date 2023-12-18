import { Badge, Center, Text } from '@chakra-ui/react';

type CostumerTableStatusColumnProps = {
  historic: Historic[];
};

enum StatusBadgeStyle {
  'accepted' = 'table_success',
  'rejected' = 'table_error',
  'ready_for_evaluation' = 'table_secundary',
  'default' = 'table_primary',
}

enum StatusTextValue {
  'accepted' = 'A inserir evidências',
  'rejected' = 'Planejamento Recusado',
  'ready_for_evaluation' = 'Aguardando aprovação',
  'default' = 'Criando seu planejamento',
}
export const CustomerTableStatusColumn = ({ historic }: CostumerTableStatusColumnProps) => {
  const historicStatus = historic?.at(-1)?.status ?? 'default';

  return (
    <Center>
      <Badge
        variant={StatusBadgeStyle[historicStatus]}
        w="15rem"
        h="3.4rem"
        py="0.8rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Text as="span">{StatusTextValue[historicStatus]}</Text>
      </Badge>
    </Center>
  );
};
