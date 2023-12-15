import { useToken } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import {
  ClockRegularIcon,
  Historic,
  HistoricDrawer,
  RejectedIcon,
  SmallDoneIcon,
} from '@/components';
import { getTotalPlanningBudgetValue } from '@/utils';

import { PastPlanningHistoricTitle } from './PastPlanningHistoricTitle';

type PastPlanningHistoricStepsProps = {
  lastHistoric: Historic[];
};

const HISTORIC_STEP_STATUS_COMPONENTS = {
  ready_for_evaluation: <ClockRegularIcon />,
  accepted: <SmallDoneIcon />,
  rejected: <RejectedIcon />,
};

export const PastPlanningHistoricSteps = ({ lastHistoric }: PastPlanningHistoricStepsProps) => {
  const [normal, error, success] = useToken('colors', [
    'greyscale.225',
    'red.danger_100',
    'text.brand',
  ]);

  const session = useSession();
  const userSessionId = session.data?.user.id as number;
  const lastHistoricIndex = lastHistoric.length - 1;

  const historicDrawerStepColors = {
    ready_for_evaluation: normal,
    rejected: error,
    accepted: success,
  };

  return (
    <>
      {lastHistoric.map(({ id, creation_date, status, description, related, actions }, index) => {
        const relatedUserIdIsCurrentSessionUserId = related?.id === userSessionId;
        const isLastHistoricItem = lastHistoricIndex === index;
        const previousHistoryUsername = lastHistoric?.at(index - 1)?.related?.username ?? '';
        const planningTotalBudgetValue = getTotalPlanningBudgetValue(actions);

        return (
          <HistoricDrawer.Step
            key={id}
            complete={HISTORIC_STEP_STATUS_COMPONENTS[status]}
            style={{
              background: historicDrawerStepColors[status],
            }}
          >
            <Historic.Container borderBottom={isLastHistoricItem ? 'none' : '1px solid'}>
              <Historic.Header date={creation_date} status={status} />

              <PastPlanningHistoricTitle
                status={status}
                userRelated={related}
                userSessionId={userSessionId}
                previousHistoryAuthor={previousHistoryUsername}
              />

              {related?.role?.name === 'Farmer' ? (
                <Historic.AccordionContainer>
                  <Historic.Accordion planningActions={actions} />
                  <Historic.Footer totalValue={planningTotalBudgetValue} />
                </Historic.AccordionContainer>
              ) : (
                <Historic.Table data={actions} isLoading={false} />
              )}

              {description && (
                <Historic.Message
                  title={
                    relatedUserIdIsCurrentSessionUserId
                      ? `Sua mensagem`
                      : `Mensagem de ${related?.username}`
                  }
                  description={description}
                />
              )}
            </Historic.Container>
          </HistoricDrawer.Step>
        );
      })}
    </>
  );
};
