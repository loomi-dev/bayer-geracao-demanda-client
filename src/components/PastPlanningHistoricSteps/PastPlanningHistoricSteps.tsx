import { useSession } from 'next-auth/react';

import { Historic, HistoricDrawer } from '@/components';

import { PastPlanningHistoricTitle } from './PastPlanningHistoricTitle';

type PastPlanningHistoricStepsProps = {
  lastHistoric: Historic[];
};

enum HistoricDrawerStepColor {
  'ready_for_evaluation' = 'greyscale.225',
  'accepted' = 'green.100',
  'rejected' = 'red.danger_100',
}

export const PastPlanningHistoricSteps = ({ lastHistoric }: PastPlanningHistoricStepsProps) => {
  const session = useSession();
  const userSessionId = session.data?.user.id as number;
  const lastHistoricIndex = lastHistoric.length - 1;

  return (
    <>
      {lastHistoric.map(({ id, creation_date, status, description, related, actions }, index) => {
        const relatedUserIdIsCurrentSessionUserId = related?.id === userSessionId;
        const isLastHistoricItem = lastHistoricIndex === index;
        const previousHistoryUsername = lastHistoric?.at(index - 1)?.related?.username ?? '';

        return (
          <HistoricDrawer.Step key={id} bg={HistoricDrawerStepColor[status]}>
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
                  <Historic.Footer totalValue="0" />
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
