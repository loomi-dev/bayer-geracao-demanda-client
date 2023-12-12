import { Flex, FlexProps, Text } from '@chakra-ui/react';

import { formatPrice } from '@/utils';

type HarverstInformationItemProps = {
  label: string;
  value?: number | string;
} & FlexProps;
export const HarverstInformationItem = ({
  label,
  value,
  ...props
}: HarverstInformationItemProps) => (
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
    <Text textTransform="uppercase" textStyle="action3">
      {label}
    </Text>
    <Text textStyle="h2" fontWeight="normal">
      {formatPrice(value)}
    </Text>
  </Flex>
);
