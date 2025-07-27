import React, { type ChangeEvent, useEffect, useState } from 'react';
import clsx from 'clsx';

import { saveSortedPosts } from '@/app/providers/StoreProvider/config/actions';
import { postsSelector } from '@/app/providers/StoreProvider/config/selectors';
import { filterByLength } from '@/features/PostLengthFilter/lib/filterByLength';
import { debounce } from '@/shared/lib/debounce/debounce';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import cls from './PostLengthFilter.module.css';

type PostLengthFilterProps = {
  className?: string;
}

export const PostLengthFilter = React.memo(
  ({
    className,
    ...props
  }: PostLengthFilterProps) => {
    const dispatch = useAppDispatch();
    const defaultList = useAppSelector(postsSelector);
    const [value, setValue] = useState<string>('')

    useEffect(() => {
      const debouncedFilter = debounce((value: string) => {
        const newList = filterByLength({defaultList, value});
        dispatch(saveSortedPosts(newList));
      }, 1000);

      debouncedFilter(value);

      return () => {
        debouncedFilter.cancel?.();
      };
    }, [value, dispatch, defaultList]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === 'Enter') {
        setValue((event.target as HTMLInputElement).value)
      }
    }

    return (
      <label>
        <input
          className={clsx(cls.input, className)}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Поиск"
          {...props}
        />
      </label>
    );
  });
