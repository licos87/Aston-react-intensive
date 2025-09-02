import React, { useState } from 'react';

import { getPostListSelector, setSortedPostList } from '@/entities/post';
import { Select } from '@/shared/ui/Select';
import { useAppSelector, useAppDispatch } from '@/app/providers/storeProvider/hooks';
import { sortByLength } from '../lib/sortByLength.ts';

import cls from './PostLengthSorted.module.css'

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

export const PostLengthSelect = React.memo(() => {
    const defaultList = useAppSelector(getPostListSelector);
    const dispatch = useAppDispatch();
    const [sortOrder, setSortOrder] = useState<string>('default')

    const handleSelect = (sortValue: string) => {
      setSortOrder(sortValue);
      const newList = sortByLength({defaultList, sortValue})
      dispatch(setSortedPostList(newList));
    };


    return (
      <Select
        className={cls.selectControl}
        options={OPTIONS}
        selected={sortOrder}
        onSelected={handleSelect}
      />
    );
  });
