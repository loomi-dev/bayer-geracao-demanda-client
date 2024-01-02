import { Flex, FlexProps, IconButton, Text } from '@chakra-ui/react';
import { MouseEvent } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

type PaginationProps = {
  page: number;
  firstPage?: number;
  countItems: number;
  totalPages: number;
  onNextPage: (e?: MouseEvent<HTMLButtonElement>) => void;
  onPreviousPage: (e?: MouseEvent<HTMLButtonElement>) => void;
} & FlexProps;

export const Pagination = ({
  page,
  firstPage = 1,
  countItems,
  totalPages,
  onPreviousPage,
  onNextPage,
  ...restProps
}: PaginationProps) => {
  const isFirstPage = page === firstPage;
  const isLastPage = page >= totalPages;

  const handlePreviousPage = () => {
    if (page > firstPage) {
      onPreviousPage();
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      onNextPage();
    }
  };

  return (
    <Flex w="full" align="center" justify="flex-end" gap="2rem" px="2.4rem" {...restProps}>
      <Text textStyle="body3" color="text.footnote">
        {page}-{countItems} de {totalPages}
      </Text>

      <IconButton
        variant="page"
        aria-label="Ir para página anterior"
        isDisabled={isFirstPage}
        onClick={handlePreviousPage}
      >
        <ChevronLeftIcon fontSize={20} />
      </IconButton>
      <IconButton
        variant="page"
        aria-label="Ir para próxima página"
        isDisabled={isLastPage}
        onClick={handleNextPage}
      >
        <ChevronRightIcon fontSize={20} />
      </IconButton>
    </Flex>
  );
};
