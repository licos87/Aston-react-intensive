export const RoutePath = {
  MAIN: '/',
  POST: '/post/:postId',
  USER: '/user/:userId',
  POSTS: 'posts',
  ALBUMS: 'albums',
  PHOTO: 'photo/:photoId',
  TODOS: 'todos',
  NOT_FOUND: '*',
} as const;
