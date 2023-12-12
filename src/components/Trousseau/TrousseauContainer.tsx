import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TrousseauContainerProps = {
  children: ReactNode;
};

export const TrousseauContainer = ({ children }: TrousseauContainerProps) => (
  <Box w="full">{children}</Box>
);
