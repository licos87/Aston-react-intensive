export interface User {
  userId: string;
  name: string;
  avatar: string;
  posts: number[];
  albums: {
    id: number;
    title: string;
    photo: {
      id: number;
      url: string;
    }[];
  }[];
  todos: string[];
}
