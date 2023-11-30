import { Checkbox, Flex, Text } from '@chakra-ui/react';

export type FilterOptionProps = {
  label: string;
  value: string;
  subLabel?: string;
};

export const FilterOption = ({ label, subLabel, value }: FilterOptionProps) => (
  <Flex
    align="flex-start"
    gap="1.2rem"
    py="1.2rem"
    borderBottom="1px solid"
    borderBottomColor="surface.primary"
  >
    <Checkbox value={value} />
    <Flex flexDir="column">
      <Text textStyle="body2">{label}</Text>
      <Text textStyle="body3">{subLabel}</Text>
    </Flex>
  </Flex>
);
