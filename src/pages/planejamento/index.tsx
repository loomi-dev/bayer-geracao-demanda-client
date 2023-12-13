import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { BigCalendarIcon, CircleIcon, Header } from '@/components';
import { LayoutWithNotifications, LayoutWithoutNotifications } from '@/layouts';
import { authOptions } from '@/lib/next-auth';
import { KanbanScreen } from '@/modules';
import { PlanningScreen } from '@/modules/planning';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = (props) => {
  if (props.role === 'Farmer')
    return (
      <LayoutWithNotifications title="Planejamento - Top Multiplicadores">
        <Header
          label="Planejamento"
          icon={
            <CircleIcon>
              <BigCalendarIcon />
            </CircleIcon>
          }
        />
        <PlanningScreen />
      </LayoutWithNotifications>
    );

  return (
    <LayoutWithoutNotifications title="Planejamento - Top Multiplicadores">
      <Header
        label="Planejamento"
        icon={
          <CircleIcon>
            <BigCalendarIcon />
          </CircleIcon>
        }
      />
      <KanbanScreen />
    </LayoutWithoutNotifications>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);
  return {
    props: {
      role: session?.user.role,
    },
  };
};
