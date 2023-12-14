import { Historic } from '@/components';

type PastPlanningHistoricTitleProps = {
  userSessionId: number;
  userRelated: Historic['related'];
  previousHistoryAuthor: string;
  status: HistoricStatus;
};

export const PastPlanningHistoricTitle = ({
  userSessionId,
  userRelated,
  previousHistoryAuthor,
  status,
}: PastPlanningHistoricTitleProps) => {
  const authorIsUserSession = userRelated?.id === userSessionId;
  const authorIsFarmer = userRelated?.role?.name === 'Farmer';

  const author = userRelated?.username;

  if (authorIsFarmer)
    return <Historic.TitleFarmer author={author} authorIsUserSession={authorIsUserSession} />;

  return (
    <Historic.TitleManager
      status={status}
      author={author}
      receiverFarmer={previousHistoryAuthor}
      authorIsUserSession={authorIsUserSession}
    />
  );
};
