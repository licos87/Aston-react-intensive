import React, { useEffect, useState } from 'react';
import { Select } from '@/shared/ui/Select';
import type { IPost } from '@/entities/Post';
import { sortByLength } from '@/features/PostLengthSorted/lib/sortByLength.ts';

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

  useEffect(() => {
    if (sortOrder) {
      const sorted = sortByLength({defaultList, sortOrder})
      sortedList(sorted);
    }
  }, [sortOrder]);

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
