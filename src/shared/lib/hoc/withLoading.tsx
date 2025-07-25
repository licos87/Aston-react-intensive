import React, { useState, useEffect } from 'react';
import { Spinner } from '@/shared/ui/Spiner';

interface WithLoadingProps<T> {
  fetchData: () => Promise<T[]>;
}

export function withLoading<T, P extends object>(
  WrappedComponent: React.ComponentType<P & { data: T[] }>
) {

  return function WithLoadingComponent({
    fetchData,
    ...props
  }: WithLoadingProps<T> & Omit<P, 'data'>) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
      const loadData = async () => {
        try {
          setIsLoading(true)
          const result = await fetchData();
          setData(result);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false)
        }
      };

      loadData();
    }, [fetchData]);

    if (isLoading) {
      return <Spinner />
    }

    return (
      <>
        <WrappedComponent data={data} {...(props as P)} />
      </>
    )
  };
}
