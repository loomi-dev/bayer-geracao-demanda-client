import { StackProps, Text, TextProps, VStack } from '@chakra-ui/react';

type ActionDetailsItemProps = {
  labelProps?: TextProps;
  valueProps?: TextProps;
  containerProps?: StackProps;
};
export const ActionDetailsItem = ({
  labelProps,
  valueProps,
  containerProps,
}: ActionDetailsItemProps) => (
  <VStack
    px="2.4rem"
    py="2rem"
    alignItems="flex-start"
    borderTop="1px solid"
    borderColor="black.50"
    w="100%"
    {...containerProps}
  >
    <Text textStyle="footnote-400" {...labelProps}>
      {labelProps?.children}
    </Text>
    <Text {...valueProps}>{valueProps?.children}</Text>
  </VStack>
);
