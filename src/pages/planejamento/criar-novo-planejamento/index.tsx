import { useRouter } from 'next/router';

import { ChevronLeftIcon, CircleIcon, Header } from '@/components';
import { LayoutWithNotifications } from '@/layouts';
import { CreatePlanningScreen } from '@/modules/planning';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => {
  const { push } = useRouter();

  const handleNavigateToPlanningScreen = () => {
    push('/planejamento');
  };

  return (
    <>
      <Header
        label="Criar novo planejamento"
        icon={
          <CircleIcon cursor="pointer" onClick={handleNavigateToPlanningScreen}>
            <ChevronLeftIcon fontSize={36} color="#fff" />
          </CircleIcon>
        }
      />
      <CreatePlanningScreen />
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <LayoutWithNotifications>{page}</LayoutWithNotifications>;
};

export default Page;
