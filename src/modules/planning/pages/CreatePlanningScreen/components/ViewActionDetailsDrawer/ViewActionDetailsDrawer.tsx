import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Text,
} from '@chakra-ui/react';

import { formatPrice } from '@/utils';

import { PlanningActionDetail } from '../PlanningActionDetail';

type ViewActionDetailsDrawerProps = {
  planningActionDetails: PlanningAction;
} & Omit<DrawerProps, 'children'>;

export const ViewActionDetailsDrawer = ({
  planningActionDetails,
  onClose,
  ...restProps
}: ViewActionDetailsDrawerProps) => (
  <Drawer onClose={onClose} {...restProps}>
    <DrawerOverlay />

    <DrawerContent>
      <DrawerHeader>
        <Text textStyle="caption1">Visualizar ação</Text>
      </DrawerHeader>

      <DrawerBody>
        <PlanningActionDetail
          title={planningActionDetails.title ?? ''}
          description={planningActionDetails.detail ?? ''}
          investment={`R$ ${formatPrice(planningActionDetails.amountInCents)}`}
          type={planningActionDetails.type ?? ''}
        />
      </DrawerBody>

      <DrawerFooter justifyContent="center">
        <Button variant="secondary" w="18rem" onClick={onClose}>
          Fechar
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
