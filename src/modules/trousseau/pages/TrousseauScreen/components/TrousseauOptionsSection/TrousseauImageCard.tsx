import { Text, VStack } from '@chakra-ui/react';

import { TrousseauImage } from './TrousseauImage';

type TrousseauImageCardProps = {
  label: string;
};

export const TrousseauImageCard = ({ label }: TrousseauImageCardProps) => (
  <VStack align="flex-start">
    <TrousseauImage />
    <Text textStyle="caption3">{label}</Text>
  </VStack>
);
