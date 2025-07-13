import { createAction } from '@reduxjs/toolkit';
import type { IPost } from '@/entities/Post';

export const savePosts = createAction<IPost[]>('data/posts');
export const saveSortedPosts = createAction<IPost[]>('data/sortedPosts');
export const setIsLoading = createAction<boolean>('data/isLoading');
