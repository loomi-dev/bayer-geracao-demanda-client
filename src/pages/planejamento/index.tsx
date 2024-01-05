import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

import { BigCalendarIcon, CircleIcon, Header } from '@/components';
import { LayoutWithNotifications, LayoutWithoutNotifications } from '@/layouts';
import { authOptions } from '@/lib/next-auth';
import { KanbanScreen, PlanningScreen } from '@/modules';

import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
  const session = useSession();
  const isManager = session.data?.user?.role === 'Manager';

  if (isManager) {
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
  }

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
};

export default Page;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  return {
    props: {
      session,
    },
  };
};
