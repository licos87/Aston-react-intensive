import type { User } from '@/entities/User/model/types/user.ts';

export interface IPost {
  id: string,
  title: string,
  imgUrl: string,
  imgAlt: string,
  text: string;
  author: User;
}
