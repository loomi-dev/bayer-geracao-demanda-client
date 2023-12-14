import { Badge, Button, Center, Flex, HStack, Text } from '@chakra-ui/react';

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
          w="16.7rem"
          h="3.4rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <Text as="span">Aguardando aprovação</Text>
          <Center
            minW="1.8rem"
            boxSize="1.8rem"
            borderRadius="full"
            bg="yellow.warning_60"
            border="1px solid"
            borderColor="opacity.yellow.0.30"
          >
            <Text textStyle="footnote" color="surface.primary" lineHeight="0">
              {quantity}
            </Text>
          </Center>
        </Badge>
        <Button size="xs" px="1.6rem">
          <Text textStyle="action3">Visualizar planejamento</Text>
        </Button>
      </HStack>
    </Flex>
  );
};
