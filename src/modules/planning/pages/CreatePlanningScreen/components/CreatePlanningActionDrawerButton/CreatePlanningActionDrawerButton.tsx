import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import { Balance, BigCalendarIcon, CircleIcon } from '@/components';

import { planningActionFormSchema } from './PlanningActionForm.schema';
import { PlanningActionFormAccordion } from './PlanningActionFormAccordion';
import { PlanningActionFormStepper } from './PlanningActionFormStepper';
import { RecommendationsAccordion } from './RecommendationsAccordion';

export const CreatePlanningActionDrawerButton = () => {
  const {
    isOpen: isOpenCreatePlanningActionDrawer,
    onOpen: onOpenCreatePlanningActionDrawer,
    onClose: onCloseCreatePlanningActionDrawer,
  } = useDisclosure();

  const methods = useForm({
    resolver: zodResolver(planningActionFormSchema),
  });

  const {
    formState: { isValid },
  } = methods;

  return (
    <>
      <Balance.Button w="15.6rem" onClick={onOpenCreatePlanningActionDrawer}>
        Nova ação
      </Balance.Button>

      <Drawer isOpen={isOpenCreatePlanningActionDrawer} onClose={onCloseCreatePlanningActionDrawer}>
        <DrawerOverlay onClick={onCloseCreatePlanningActionDrawer} />
        <DrawerContent>
          <FormProvider {...methods}>
            <DrawerHeader>
              <HStack spacing="1.6rem">
                <CircleIcon>
                  <BigCalendarIcon />
                </CircleIcon>

                <Text textStyle="caption1">Criar nova ação</Text>
              </HStack>

              <PlanningActionFormStepper />
            </DrawerHeader>

            <DrawerBody>
              <RecommendationsAccordion />
              <PlanningActionFormAccordion />

              <HStack mt="1rem" justify="flex-end">
                <Text
                  textStyle="caption3"
                  color="text.footnote"
                  maxW="45rem"
                  align="right"
                  lineHeight="2rem"
                >
                  Obs: Sua solicitação será analisada e em até 5 dias úteis você poderá utilizar os
                  recursos
                </Text>
              </HStack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="secondary" w="18rem" onClick={onCloseCreatePlanningActionDrawer}>
                Cancelar
              </Button>
              <Button w="18rem" isDisabled={!isValid}>
                Criar nova ação
              </Button>
            </DrawerFooter>
          </FormProvider>
        </DrawerContent>
      </Drawer>
    </>
  );
};
