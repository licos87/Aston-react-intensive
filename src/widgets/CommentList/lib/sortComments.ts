import type { CommentType } from '@/entities/Comment/model/types/CommentType.ts';

export const sortComments = (list: CommentType[]) => {
  const date = (str: string) =>new Date(str).getTime()
  return [...list].sort((a,b)=> date(b.date) - date(a.date))
}
