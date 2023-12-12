import { Flex, FlexProps, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

type HarvestInformationItemProps = {
  label: string;
  value?: number | string;
} & FlexProps;
export const HarvestInformationItem = ({ label, value, ...props }: HarvestInformationItemProps) => (
  <Flex
    borderBottom="1px solid"
    borderBottomColor="opacity.black.0.10"
    flexDir="column"
    gap="0.8rem"
    w="100%"
    h="12rem"
    pb="1rem"
    justify="space-between"
    {...props}
  >
    <Text textTransform="uppercase" textStyle="action3" maxW="22rem" lineHeight="1.8rem">
      {label}
    </Text>
    <Text textStyle="h3" fontWeight="normal" py="1rem" pl="1.6rem" lineHeight="2.8rem">
      {formatPrice(value)}
    </Text>
  </Flex>
);
