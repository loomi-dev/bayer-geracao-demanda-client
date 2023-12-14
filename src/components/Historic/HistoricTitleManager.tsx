import { Box, HStack, Text } from '@chakra-ui/react';

import { HistoricTitle } from './HistoricTitle';

type HistoricTitleManagerProps = {
  authorIsUserSession: boolean;
  author: string;
  receiverFarmer: string;
  status: HistoricStatus;
};

export const HistoricTitleManager = ({
  authorIsUserSession,
  author,
  receiverFarmer,
  status,
}: HistoricTitleManagerProps) => (
  <HStack py="1.5rem" spacing="0.8rem">
    {authorIsUserSession ? (
      <HistoricTitle textStyle="body4">
        Você{' '}
        <Text as="span" color={status === 'accepted' ? 'green.100' : 'red.danger_100'}>
          {status === 'accepted' ? 'aprovou' : 'recusou'}
        </Text>{' '}
        ações do planejamento de {receiverFarmer}
      </HistoricTitle>
    ) : (
      <>
        <HistoricTitle textStyle="body4">
          {author}{' '}
          <Text as="span" color={status === 'accepted' ? 'green.100' : 'red.danger_100'}>
            {status === 'accepted' ? 'aprovou' : 'recusou'}
          </Text>{' '}
          seu planejamento
        </HistoricTitle>

        <Box boxSize="0.4rem" borderRadius="full" bg="greyscale.450" />

        <HistoricTitle textStyle="body4" color="greyscale.700">
          RTV
        </HistoricTitle>
      </>
    )}
  </HStack>
);
