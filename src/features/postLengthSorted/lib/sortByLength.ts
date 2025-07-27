import type { PostType } from '@/entities/post';

type sortedProps = {
  defaultList: PostType[];
  sortValue: string;
}

export const sortByLength = ({
  defaultList,
  sortValue
}: sortedProps): PostType[] => {
  if (sortValue === 'default') {
    return defaultList;
  }

  return [...defaultList].sort((a, b) => {
    const diff = a.title.length - b.title.length;
    return sortValue === 'maxLength' ? -diff : diff;
  });
}
