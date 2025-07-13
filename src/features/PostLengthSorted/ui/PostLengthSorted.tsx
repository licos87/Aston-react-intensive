import React, { useEffect, useState } from 'react';
import { Select } from '@/shared/ui/Select';
import { sortByLength } from '@/features/PostLengthSorted/lib/sortByLength.ts';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import { postsSelector } from '@/app/providers/StoreProvider/config/selectors.ts';
import { saveSortedPosts } from '@/app/providers/StoreProvider/config/actions.ts';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.ts';

const OPTIONS = [
  {
    value: 'default',
    label: 'По умолчанию'
  },
  {
    value: 'minLength',
    label: 'Сначала короткие названия'
  },
  {
    value: 'maxLength',
    label: 'Сначала длинные названия'
  }
]

type PostLengthFilterProps = {
  className?: string;
}

export const PostLengthSelect = React.memo(
  ({
    className,
    ...props
  }: PostLengthFilterProps) => {
    const defaultList = useAppSelector(postsSelector);
    const dispatch = useAppDispatch();
    const [sortOrder, setSortOrder] = useState<string>('default')

    useEffect(() => {
        const newList = sortByLength({defaultList, sortOrder})
        dispatch(saveSortedPosts(newList));
    }, [defaultList, dispatch, sortOrder]);

    const handleSelect = (sortValue: string) => {
      setSortOrder(sortValue);
    };


    return (
      <Select className={className}
              options={OPTIONS}
              selected={sortOrder}
              onSelected={handleSelect}
              {...props}
      />
    );
  });
