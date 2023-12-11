import { HStack, Text } from '@chakra-ui/react';

type CustomerHistoricTitleProps = {
  username?: string;
  status: HistoricStatus;
};
export const CustomerHistoricTitle = ({ username, status }: CustomerHistoricTitleProps) => {
  if (status === 'ready_for_evaluation')
    return <Text textStyle="body1">{`${username} enviou o planejamento para aprovação`}</Text>;
  if (status === 'rejected')
    return (
      <HStack textStyle="body1" lineHeight="initial" fontWeight="bold">
        <Text>Você</Text>
        <Text color="red.danger_100">recusou</Text>
        <Text>{`ações do planejamento de ${username}`} </Text>
      </HStack>
    );

  if (status === 'accepted')
    return (
      <HStack textStyle="body1" lineHeight="initial" fontWeight="bold">
        <Text>Você</Text>
        <Text color="green.100">aprovou</Text>
        <Text>{`ações do planejamento de ${username}`} </Text>
      </HStack>
    );
};
