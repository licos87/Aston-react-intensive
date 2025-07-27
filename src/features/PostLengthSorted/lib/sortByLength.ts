import type { IPost } from '@/entities/Post';

type sortedProps = {
  defaultList: IPost[];
  sortValue: string;
}

export const sortByLength = ({
  defaultList,
                               sortValue
}: sortedProps):IPost[] => [...defaultList].sort((a, b) => {
  const diff = a.title.length - b.title.length;
  return sortValue === 'maxLength' ? -diff : diff;
});
