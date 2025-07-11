import type { CommentType } from '@/entities/Comment/model/types/CommentType.ts';

export const sortComments = (list: CommentType[]) => list.sort((a,b)=> Number(a.date) - Number(b.date))
