import type { AppState } from '@/app/providers/storeProvider';

export const getCommentListSelector = (store: AppState) => store.comment.commentList;

