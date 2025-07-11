import type { IPost } from '@/entities/Post';

type filterByLengthProps = {
  primaryList: IPost[];
  value: string;
}

export const filterByLength = ({
  primaryList,
  value
}: filterByLengthProps): IPost[] => {
  let result = primaryList;
  if(value) result = primaryList.filter(post => post.title.includes(value));

  return result;
}

