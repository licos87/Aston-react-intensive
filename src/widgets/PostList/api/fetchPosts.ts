import { POSTS_LIST } from '../mock/postsList.ts';
import type { IPost } from '@/entities/Post';

export const fetchPosts = async ():Promise<IPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(POSTS_LIST);
    }, 3000);
  });

}
