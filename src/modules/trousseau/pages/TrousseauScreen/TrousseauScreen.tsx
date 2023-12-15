import { useGetTrousseau } from '@/api';

import { SuppliersSection, TrousseauOptionsSection } from './components';

export const TrousseauScreen = () => {
  const { data, isLoading } = useGetTrousseau();
  const catalogs = data?.data.catalogs;
  const materialItems = data?.data.material_items;
  const suppliers = data?.data.suppliers;

  return (
    <>
      <TrousseauOptionsSection
        catalogs={catalogs}
        materialItems={materialItems}
        isLoading={isLoading}
      />
      <SuppliersSection suppliers={suppliers} isLoading={isLoading} />
    </>
  );
};
