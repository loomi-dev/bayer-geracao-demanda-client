import { Badge, Center, Flex, HStack, Text } from '@chakra-ui/react';

type CustomerPendingPlanningNotificationProps = {
  quantity: number;
};
export const CustomerPendingPlanningNotification = ({
  quantity,
}: CustomerPendingPlanningNotificationProps) => {
  if (!quantity) return;
  return (
    <Flex
      align="center"
      layerStyle="card"
      justify="space-between"
      width="100%"
      py="2rem"
      px="1.6rem"
      h="5.3rem"
    >
      <Text
        textStyle="footnote-bold"
        textTransform="uppercase"
        fontSize={{ base: '1.2rem', xl: '1.3rem' }}
      >
        Você possui planejamentos para aprovar
      </Text>
      <HStack gap="1.6rem">
        <Badge
          variant="table_warning"
          w="15rem"
          h="3.4rem"
          py="0.8rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <Text as="span">Aguardando aprovação</Text>
          <Center
            boxSize="1.8rem"
            borderRadius="full"
            bg="opacity.yellow.0.10"
            border="1px solid"
            borderColor="opacity.yellow.0.30"
          >
            <Text textStyle="footnote" color="yellow.warning_60" lineHeight="0">
              {quantity}
            </Text>
          </Center>
        </Badge>
        <Badge
          variant="filled_primary"
          color="text.primary"
          w="15rem"
          h="3.4rem"
          py="0.8rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
          _hover={{ opacity: '0.7', cursor: 'pointer' }}
        >
          <Text as="span" fontWeight="bold">
            Visualizar planejamento
          </Text>
        </Badge>
      </HStack>
    </Flex>
  );
};
