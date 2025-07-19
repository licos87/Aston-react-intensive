import type { PostType } from '@/entities/post';

type filterByLengthProps = {
  defaultList: PostType[];
  value: string;
}

export const filterByLength = ({
  defaultList,
  value
}: filterByLengthProps): PostType[] => {
  let result = defaultList;
  result = defaultList.filter(post => post.title.includes(value.toLowerCase()));

  return result;
}

