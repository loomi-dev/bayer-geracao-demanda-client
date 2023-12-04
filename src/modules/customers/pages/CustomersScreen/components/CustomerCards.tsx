import { Flex, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import { useGetManager } from '@/api/manager/queries';

export const CustomerCards = () => {
  const session = useSession();
  const userId = session.data?.user.id;
  const { data, isLoading } = useGetManager(
    {
      id: userId,
    },
    { enabled: Boolean(userId) },
  );
  const manager = data?.data[0];
  console.log(manager);
  return (
    <Flex gap="1.7rem">
      <Flex layerStyle="card" align="center" p="2.4rem" gap="0.8rem" h="10rem">
        <Text textStyle="h3">R$</Text>
        <Text textStyle="h2">540.982</Text>
        <Text w="9.4rem" textStyle="body3" color="footnote">
          Valor planejado total
        </Text>
      </Flex>
      <Flex layerStyle="card" align="center" p="2.4rem" gap="0.8rem" h="10rem">
        <Text textStyle="h2">2023/2024</Text>
        <Text w="9.4rem" textStyle="body3" color="footnote">
          Safra atual
        </Text>
      </Flex>
      <Flex layerStyle="card" align="center" p="2.4rem" gap="0.8rem" h="10rem">
        <Text textStyle="h2">6</Text>
        <Text w="9.4rem" textStyle="body3" color="footnote">
          Multiplicadores gerenciados
        </Text>
      </Flex>
    </Flex>
  );
};
