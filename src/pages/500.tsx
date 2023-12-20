import { LayoutCustomError } from '@/layouts';
import { InternalErrorScreen } from '@/modules';

import { NextPageWithLayout } from './_app';

const Custom500: NextPageWithLayout = () => <InternalErrorScreen />;

Custom500.getLayout = function getLayout(page) {
  return (
    <LayoutCustomError title="Erro interno na aplicação - Top Multiplicadores">
      {page}
    </LayoutCustomError>
  );
};

export default Custom500;
