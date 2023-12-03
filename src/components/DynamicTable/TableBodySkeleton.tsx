import { Tbody as ChakraTbody, Skeleton, Td, Tr } from '@chakra-ui/react';

type TableBodySkeletonProps = {
  headersAmount: number;
};

export const TableBodySkeleton = ({ headersAmount }: TableBodySkeletonProps) => (
  <ChakraTbody>
    {Array.from({ length: 6 }).map((_, i) => (
      <Tr key={i}>
        {Array.from({ length: headersAmount }).map((_, i) => (
          <Td key={i}>
            <Skeleton h="2rem" w="full" />
          </Td>
        ))}
      </Tr>
    ))}
  </ChakraTbody>
);
