import { Historic } from '@/components';

type PastPlanningHistoricTitleProps = {
  userSessionId: number;
  userRelated: Historic['related'];
  previousHistoryAuthor: string;
};

export const PastPlanningHistoricTitle = ({
  userSessionId,
  userRelated,
  previousHistoryAuthor,
}: PastPlanningHistoricTitleProps) => {
  const authorIsUserSession = userRelated?.id === userSessionId;
  const authorIsFarmer = userRelated?.role?.name === 'Farmer';

  const author = userRelated?.username;

  if (authorIsFarmer)
    return <Historic.TitleFarmer author={author} authorIsUserSession={authorIsUserSession} />;

  return (
    <Historic.TitleManager
      author={author}
      receiverFarmer={previousHistoryAuthor}
      authorIsUserSession={authorIsUserSession}
    />
  );
};
