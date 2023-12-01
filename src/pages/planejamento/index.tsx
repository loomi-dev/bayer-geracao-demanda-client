import { BigCalendarIcon, CircleIcon, Header } from '@/components';
import { LayoutWithNotifications } from '@/layouts';
import { PlanningScreen } from '@/modules/planning';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => <PlanningScreen />;

Page.getLayout = function getLayout(page) {
  return (
    <LayoutWithNotifications>
      <Header
        label="Planejamento"
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
