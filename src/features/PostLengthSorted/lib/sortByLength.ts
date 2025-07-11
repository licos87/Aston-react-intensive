import type { IPost } from '@/entities/Post';

type sortedProps = {
  defaultList: IPost[];
  sortOrder: string;
}

export const sortByLength = ({
  defaultList,
  sortOrder
}: sortedProps): IPost[] => {
  if (sortOrder === 'default') {
    return defaultList;
  }

  return [...defaultList].sort((a, b) => {
    const diff = a.title.length - b.title.length;
    return sortOrder === 'maxLength' ? -diff : diff;
  });
}
