import React, {
  type ChangeEvent,
  useEffect,
  useRef,
  useState
} from 'react';
import clsx from 'clsx';
import type { IPost } from '@/entities/Post';

import cls from './PostLengthFilter.module.css';
import { debounce } from '@/shared/lib/debounce/debounce.ts';
import {
  filterByLength
} from '@/features/PostLengthFilter/lib/filterByLength.ts';

type PostLengthFilterProps = {
  className?: string;
  defaultList: IPost[];
  filteredList: (filteredList: IPost[]) => void;
}

export const PostLengthFilter = React.memo(
  ({
  className,
  defaultList,
  filteredList,
  ...props
}: PostLengthFilterProps) => {
  const [value, setValue] = useState<string>('')
  const primaryList = useRef(defaultList).current

  useEffect(() => {
    const debouncedFilter = debounce((value: string) => {
      const newList = filterByLength({primaryList, value});
      filteredList(newList);
    }, 1000);

    debouncedFilter(value);

    return () => {
      debouncedFilter.cancel?.();
    };
  }, [filteredList, primaryList, value]);

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
