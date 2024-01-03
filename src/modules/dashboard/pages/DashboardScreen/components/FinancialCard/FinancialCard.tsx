import { Flex, HStack, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

type FinancialCardProps = {
  title: string;
  value?: number | string;
  description: string;
};

export const FinancialCard = ({ title, value, description }: FinancialCardProps) => (
  <Flex
    h="17.5rem"
    pl="2.4rem"
    pr="4rem"
    pt="2.4rem"
    layerStyle="card"
    gap="0.4rem"
    flexDir="column"
  >
    <Text textTransform="uppercase" textStyle="action3">
      {title}
    </Text>
    <HStack>
      <Text textStyle="h2" as="span" color="text.brand">
        R$
      </Text>{' '}
      <Text textStyle="h2" as="span">
        {formatPrice(value)}
      </Text>
    </HStack>
    <Text w="21.2rem" textStyle="body3" color="text.footnote">
      {description}
    </Text>
  </Flex>
);
