import { Button, HStack } from '@chakra-ui/react';

export const CreatePlanningActionSection = () => (
  <HStack w="full" justify="center" spacing="1rem">
    <Button variant="fifth" w="7.6rem" size="sm" fontSize="1rem">
      Cancelar
    </Button>

    <Button size="sm" w="19.3rem" fontSize="1rem">
      Enviar planejamento para o RTV
    </Button>
  </HStack>
);
