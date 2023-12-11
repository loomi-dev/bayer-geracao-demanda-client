import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import { HistoricTitle } from './HistoricTitle';

type HistoricTitleManagerProps = {
  authorIsUserSession: boolean;
  author: string;
  receiverFarmer: string;
};

export const HistoricTitleManager = ({
  authorIsUserSession,
  author,
  receiverFarmer,
}: HistoricTitleManagerProps) => (
  <HStack py="1.5rem" spacing="0.8rem">
    {authorIsUserSession ? (
      <HistoricTitle textStyle="body4">
        Você{' '}
        <Text as="span" color="text.brand">
          recusou
        </Text>{' '}
        ações do planejamento de {receiverFarmer}
      </HistoricTitle>
    ) : (
      <>
        <HistoricTitle textStyle="body4">
          {author}{' '}
          <Text as="span" color="text.brand">
            recusou
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
