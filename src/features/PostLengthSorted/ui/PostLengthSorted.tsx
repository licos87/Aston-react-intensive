import React, { useState } from 'react';
import { Select } from '@/shared/ui/Select';
import type { IPost } from '@/entities/Post';
import { sortByLength } from '@/features/PostLengthSorted/lib/sortByLength.ts';

import cls from './PostLengthSorted.module.css';

const OPTIONS = [
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
  defaultList: IPost[];
  sortedList: (sortedList: IPost[]) => void;
}

export const PostLengthSelect = React.memo(
  ({
  className,
  defaultList,
  sortedList,
  ...props
}: PostLengthFilterProps) => {
  const [sortOrder, setSortOrder] = useState<string>('')

  const handleSelect = (sortValue: string) => {
    setSortOrder(sortValue);
    const sorted = sortByLength({defaultList, sortValue})
    sortedList(sorted);
  };


  return (
    <Select className={cls.selectControl}
            options={OPTIONS}
            selected={sortOrder}
            onSelected={handleSelect}
            {...props}
    />
  );
});
