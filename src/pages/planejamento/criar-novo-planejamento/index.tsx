import { BigCalendarIcon, CircleIcon, Header } from '@/components';
import { LayoutWithNotifications } from '@/layouts';
import { CreatePlanningScreen } from '@/modules/planning';
import { NextPageWithLayout } from '@/pages/_app';

const Page: NextPageWithLayout = () => <CreatePlanningScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications>
      <Header
        label="Criar novo planejamento"
        icon={
          <CircleIcon>
            <BigCalendarIcon />
          </CircleIcon>
        }
      />
      {page}
    </LayoutWithNotifications>
  );
};

export default Page;
