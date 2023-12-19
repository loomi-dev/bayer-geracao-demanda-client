import { StackProps, VStack } from '@chakra-ui/react';
import { ReactNode, createContext, useContext } from 'react';

import { useGetFarmer } from '@/api';
import { formatDate, formatPrice } from '@/utils';

type BalanceContextProps = {
  isLoading: boolean;
  balanceValue: string;
  expirationDate: string;
};

const BalanceContext = createContext<BalanceContextProps | null>(null);

type BalanceProps = {
  farmerId: number;
  children: ReactNode;
} & StackProps;

export const BalanceContainer = ({ farmerId, children, ...restProps }: BalanceProps) => {
  const { data: dataGetFarmer, isLoading: isLoadingDataGetFarmer } = useGetFarmer(
    { farmerId },
    { enabled: Boolean(farmerId) },
  );
  const balanceValue = formatPrice(dataGetFarmer?.data?.[0].wallet.balance ?? 0);
  const expirationDateValue = formatDate(
    dataGetFarmer?.data?.[0]?.safra?.deadline_to_add_plannings,
  );
  return (
    <BalanceContext.Provider
      value={{
        isLoading: isLoadingDataGetFarmer,
        balanceValue,
        expirationDate: expirationDateValue,
      }}
    >
      <VStack
        as="section"
        layerStyle="card"
        align="flex-start"
        w="full"
        spacing="0.8rem"
        p="2.4rem"
        {...restProps}
      >
        {children}
      </VStack>
    </BalanceContext.Provider>
  );
};

export const useBalanceContext = () => useContext(BalanceContext);
