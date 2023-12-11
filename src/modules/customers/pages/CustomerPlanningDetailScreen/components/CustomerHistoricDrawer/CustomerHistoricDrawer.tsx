import { Box } from '@chakra-ui/react';

import { useGetPlanningHistoric } from '@/api';
import { Historic, HistoricDrawer } from '@/components';

import { CustomerHistoricTitle } from './CustomerHistoricTitle';

type CustomerHistoricDrawerProps = {
  planningId: number;
  isOpen: boolean;
  actions: PlanningAction[];
  onClose: () => void;
};

export const CustomerHistoricDrawer = ({
  planningId,
  actions,
  isOpen,
  onClose,
}: CustomerHistoricDrawerProps) => {
  const { data: getPlanningHistoric } = useGetPlanningHistoric(
    { planningId },
    { enabled: Boolean(planningId && isOpen) },
  );
  const historic = getPlanningHistoric?.data.historic ?? [];

  return (
    <HistoricDrawer.Container isOpen={isOpen} onClose={onClose}>
      <HistoricDrawer.Header />
      <HistoricDrawer.Body index={0}>
        {historic.map((item) => (
          <HistoricDrawer.Step key={item.id}>
            <Historic.Container border="none">
              <Historic.Header status={item.status} date={item.creation_date} />
              <Historic.Title>
                <CustomerHistoricTitle status={item.status} username={item.related?.username} />
              </Historic.Title>
              <Box w="full" borderRadius="1.6rem" boxShadow="datepicker">
                <Historic.Accordion planningActions={actions} />
                <Historic.Footer
                  border="none"
                  bgColor="surface.primary"
                  borderTopRadius="initial"
                  borderTop="1px solid"
                  borderTopColor="opacity.white.1.40"
                  borderBottomRadius="1.6rem"
                  py="2rem"
                  mt="-0.1rem"
                  justify="space-between"
                  actions={item.actions}
                />
              </Box>
            </Historic.Container>
          </HistoricDrawer.Step>
        ))}
      </HistoricDrawer.Body>
    </HistoricDrawer.Container>
  );
};
