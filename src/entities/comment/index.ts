export { Comment } from './ui/Comment';
export type { CommentType } from './model/types/CommentType';
export { useGetCommentListQuery } from '@/entities/comment/api/commentApi';
export { getCommentListSelector } from './model/selectors/commentSelector.ts'
export { setCommentList, commentReducer } from './model/slice/commentSlice'
