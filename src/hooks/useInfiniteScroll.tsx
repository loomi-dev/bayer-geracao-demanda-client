import { RefObject, useEffect } from 'react';

type UseInfiniteScrollProps = {
  targetRef: RefObject<HTMLElement>;
  isLoading: boolean;
  hasNextPage: boolean;
  loadMoreItems: () => void;
};

export const useInfiniteScroll = ({
  targetRef,
  isLoading,
  hasNextPage,
  loadMoreItems,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    const target = targetRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading && hasNextPage) {
        loadMoreItems();
      }
    }, options);

    if (target) {
      observer.observe(target);

      return () => {
        observer.unobserve(target);
      };
    }
  }, [targetRef, isLoading, hasNextPage, loadMoreItems]);
};
