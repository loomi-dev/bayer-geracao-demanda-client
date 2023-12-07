import { Flex, HStack, Text } from '@chakra-ui/react';

import { HistoricItem } from './HistoricItem';

type HistoricProps = {
  historicList: Historic[];
};

export const Historic = ({ historicList }: HistoricProps) => (
  <Flex flexDir="column" px="7.2rem" pt="1.6rem" gap="1.6rem">
    {historicList.map(({ id, status, actions, related }) => (
      <>
        {status === 'ready_for_evaluation' && (
          <Text textStyle="body1">{`${related.username} enviou um planejamento para aprovação`}</Text>
        )}
        {status === 'rejected' && (
          <HStack>
            <Text textStyle="body1" fontWeight="bold">
              Você
            </Text>
            <Text textStyle="body1" fontWeight="bold" color="red.danger_100">
              recusou
            </Text>
            <Text
              textStyle="body1"
              fontWeight="bold"
            >{`ações do planejamento de ${related.username}`}</Text>
          </HStack>
        )}
        <HistoricItem key={id} actions={actions} />
      </>
    ))}
  </Flex>
);
