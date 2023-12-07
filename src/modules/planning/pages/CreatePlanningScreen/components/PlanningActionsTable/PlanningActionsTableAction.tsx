import { Button, Divider, Flex, useDisclosure } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { EditIcon, EyeOpenIcon, TrashIcon } from '@/components';

type PlanningActionsTableActionProps = PlanningAction;

const DynamicViewActionDetailsDrawer = dynamic(async () => {
  const { ViewActionDetailsDrawer } = await import('../ViewActionDetailsDrawer');

  return ViewActionDetailsDrawer;
});

export const PlanningActionsTableAction = (data: PlanningActionsTableActionProps) => {
  const {
    isOpen: isOpenViewActionDetailsDrawer,
    onOpen: onOpenViewActionDetailsDrawer,
    onClose: onCloseViewActionDetailsDrawer,
  } = useDisclosure();

  const isActionAccepted = data.status === 'accepted';

  return (
    <>
      {isActionAccepted ? (
        <>
          <Button variant="fifth" h="3rem" w="7rem" onClick={onOpenViewActionDetailsDrawer}>
            <EyeOpenIcon />
          </Button>

          {isOpenViewActionDetailsDrawer && (
            <DynamicViewActionDetailsDrawer
              planningActionDetails={data}
              isOpen={isOpenViewActionDetailsDrawer}
              onClose={onCloseViewActionDetailsDrawer}
            />
          )}
        </>
      ) : (
        <Flex layerStyle="actions">
          <Button variant="unstyled" isDisabled>
            <EditIcon />
          </Button>

          <Divider orientation="vertical" h="1rem" w="1px" borderColor="greyscale.450" />

          <Button variant="unstyled" isDisabled>
            <TrashIcon />
          </Button>
        </Flex>
      )}
    </>
  );
};
