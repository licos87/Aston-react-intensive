import React, { type ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';

import { getPostListSelector, setSortedPostList } from '@/entities/post';
import { debounce } from '@/shared/lib/debounce';
import {
  useAppSelector,
  useAppDispatch,
} from '@/app/providers/storeProvider/hooks';

import { filterByLength } from '../lib/filterByLength';
import cls from './PostLengthFilter.module.css';

export const PostLengthFilter = React.memo(() => {
  const dispatch = useAppDispatch();
  const defaultList = useAppSelector(getPostListSelector);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const debouncedFilter = debounce((value: string) => {
      const newList = filterByLength({ defaultList, value });
      dispatch(setSortedPostList(newList));
    }, 1000);

    debouncedFilter(value);
    return () => {
      debouncedFilter.cancel?.();
    };
  }, [value, dispatch, defaultList]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setValue((event.target as HTMLInputElement).value);
    }
  };

  return (
    <label>
      <input
        className={clsx(cls.input, cls.selectControl)}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Поиск"
      />
    </label>
  );
});
