import { HistoricItem } from './HistoricItem';

type HistoricProps = {
  historicList: Historic[];
};
export const Historic = ({ historicList }: HistoricProps) =>
  historicList.map(({ id, actions }) => <HistoricItem key={id} actions={actions} />);
