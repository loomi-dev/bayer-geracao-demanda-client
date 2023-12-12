import { HistoricTitle } from './HistoricTitle';

type HistoricTitleFarmerProps = {
  authorIsUserSession: boolean;
  author: string;
};

export const HistoricTitleFarmer = ({ authorIsUserSession, author }: HistoricTitleFarmerProps) => (
  <HistoricTitle>
    {authorIsUserSession
      ? 'Você enviou o planejamento para aprovação'
      : `${author} enviou o planejamento para aprovação`}
  </HistoricTitle>
);
