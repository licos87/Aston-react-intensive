import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector.ts';
import { postsSelector } from '@/app/providers/StoreProvider/config/selectors.ts';

export const TodosPage = () => {
  const {userId} = useParams();
  const postList = useAppSelector(postsSelector);
  const todos = postList.find(post => post.author.userId === userId)?.author.todos;

  return (
    <ul>
      {todos?.map((todo, index) => <li key={todo + index}>{todo}</li>)}
    </ul>
  );
};
