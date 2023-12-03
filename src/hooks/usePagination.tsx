import { Url } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/router';

export const usePagination = (namePage = 'table') => {
  const { pathname, query, replace } = useRouter();

  const suffixPage = '_page';
  const fullNamePage = `${namePage}${suffixPage}`;

  const currentPage = Number(query?.[fullNamePage]) || 1;

  const handleNextPage = () => {
    const newPage = currentPage + 1;

    const urlObject: Url = {
      pathname,
      query: {
        ...query,
        [fullNamePage]: newPage,
      },
    };

    replace(urlObject, urlObject, {
      scroll: false,
    });
  };

  const handlePreviousPage = () => {
    const newPage = currentPage - 1;

    const urlObject: Url = {
      pathname,
      query: {
        ...query,
        [fullNamePage]: newPage,
      },
    };

    replace(urlObject, urlObject, {
      scroll: false,
    });
  };

  return {
    currentPage,
    handleNextPage,
    handlePreviousPage,
  };
};
