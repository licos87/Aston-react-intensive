import React, { useEffect, useState } from 'react';

import { getPostListSelector, setSortedPostList } from '@/entities/post';
import { Select } from '@/shared/ui/Select';
import { useAppSelector, useAppDispatch } from '@/app/providers/storeProvider/hooks';
import { sortByLength } from '../lib/sortByLength.ts';

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
    const defaultList = useAppSelector(getPostListSelector);
    const dispatch = useAppDispatch();
    const [sortOrder, setSortOrder] = useState<string>('default')

    useEffect(() => {
        const newList = sortByLength({defaultList, sortOrder})
        dispatch(setSortedPostList(newList));
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
