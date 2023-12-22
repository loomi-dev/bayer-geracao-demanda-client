import { LayoutCustomError } from '@/layouts';
import { NotFoundScreen } from '@/modules';

import { NextPageWithLayout } from './_app';

const Custom404: NextPageWithLayout = () => <NotFoundScreen />;

Custom404.getLayout = function getLayout(page) {
  return (
    <LayoutCustomError title="Página não encontrada - Top Multiplicadores">
      {page}
    </LayoutCustomError>
  );
};

export default Custom404;
