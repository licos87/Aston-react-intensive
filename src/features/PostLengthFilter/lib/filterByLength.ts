import type { IPost } from '@/entities/Post';

type filterByLengthProps = {
  defaultList: IPost[];
  value: string;
}

export const filterByLength = ({
  defaultList,
  value
}: filterByLengthProps): IPost[] => {
  let result = defaultList;
  if(value) result = defaultList.filter(post => post.title.includes(value));

  return result;
}

