import type { CommentType } from '@/entities/Comment/model/types/CommentType.ts';

export const randomList = (list: CommentType[]) => {
  const randomLength = Math.floor(Math.random() * list.length) + 1;
  const result = new Set<CommentType>;
  for(let i=0; i<= randomLength; i++) {
    const randomComment = Math.floor(Math.random() * list.length);
    result.add(list[randomComment])
  }
  return Array.from<CommentType>(result)
}
