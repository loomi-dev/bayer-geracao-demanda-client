import { useGetTrousseau } from '@/api';

import { SuppliersSection, TrousseauOptionsSection } from './components';
import { useTrousseauStore } from './stores';

export const TrousseauScreen = () => {
  const [supplierIds, selectedTrousseau] = useTrousseauStore((state) => [
    state.supplierIds,
    state.selectedTrousseau,
  ]);
  const { data, isLoading } = useGetTrousseau({
    supplierIds,
    isSelected: Boolean(selectedTrousseau),
  });
  const catalogs = data?.data.catalogs;
  const materialItems = data?.data.material_items;
  const suppliers = data?.data?.suppliers;
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
